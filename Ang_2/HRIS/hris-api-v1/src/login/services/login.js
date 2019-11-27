const mailer = require('pug-mailer');
const jwt = require('jsonwebtoken');
const crypto = require("crypto-js");
var _ = require('lodash');   //working with arrays, numbers, objects, strings,
const UIDGenerator = require('uid-generator');
const uidgen = new UIDGenerator();
const mongoose=require('mongoose');
const empModel = require('../../common/models/employee');
const helper = require('../../common/helpers/helper');
const credentials = require('../../config/credentials');
module.exports = () => {
    return {
        login: (req, res) => {
            var passBytes = crypto.AES.decrypt((req.body.password).toString(), credentials().secretKey);
            var password = passBytes.toString(crypto.enc.Utf8);
            empModel.find({ 'officialEmail': req.body.email }, (err, data) => {
                if (err) {
                    res.status(500).send(err);
                } else if (_.isEmpty(data)) {
                    res.status(401).send(helper().responseErrorMessage('0', 'Invalid credentials', null))
                }
                else if (data[0].password != password) {
                    res.status(401).send(helper().responseErrorMessage('0', 'Password mismatch!', null))
                } else {
                    const token = jwt.sign({ email: req.body.email }, credentials().secretKey, {
                        expiresIn: '1h'
                    });
                    res.status(200).send(helper().responseSuccessMessage('1', 'Login successful', data[0]._id, token));
                }

            });
        },
        forgotPassword: (req, res) => {
            empModel.find({ 'officialEmail': req.body.email }, (err, data) => {
                if (err) {
                    res.status(500).send(err);
                } else if (_.isEmpty(data)) {
                    res.status(401).send(helper().responseErrorMessage('0', 'Invalid email', null))
                } else {
                    const generatedUid = uidgen.generateSync();
                    empModel.findOneAndUpdate({ 'officialEmail': req.body.email }, { $set: { password: generatedUid } }, (err, result) => {
                        if (err) {
                            res.status(500).send(err);
                        } else {
                            mailer.init({
                                service: 'Gmail',
                                auth: {
                                    user: credentials().mailerUserName,
                                    pass: credentials().mailerPassword
                                }
                            })
                            mailer.send({
                                from: credentials().mailerUserName,
                                to: req.body.email,
                                subject: 'Atmecs OnBoarding Process',
                                template: 'forgot_password',
                                data: {
                                    id: generatedUid
                                }
                            }).then(response => 
                                res.status(200).send(helper().responseSuccessMessage('1', 'Password Generated Successfully', null, null))
                            ).catch(err => 
                                res.status(500).send(helper().responseErrorMessage('0', 'Mail not sent', err))
                            )
                        }
                    });
                }
            });
        },
        changePassword: (req, res) => {
            var passBytes = crypto.AES.decrypt((req.body.password).toString(), credentials().secretKey);
            var password = passBytes.toString(crypto.enc.Utf8);
            var newPassBytes = crypto.AES.decrypt((req.body.newpassword).toString(), credentials().secretKey);
            var newPassword = newPassBytes.toString(crypto.enc.Utf8);
            empModel.findByIdAndUpdate({'_id': mongoose.Types.ObjectId(req.params.id)}, { "$set": { "password": newPassword } }, (err, data) => {
                console.log(data);
                if (err) {
                    res.status(500).send(err);
                }
                else if (_.isEmpty(data)) {
                    res.status(400).send(helper().responseErrorMessage('0', 'Invalid User', null))
                }
                else if (data.password != password) {
                    res.status(400).send(helper().responseErrorMessage('0', 'Old Password mismatch!', null))
                } else {
                    res.status(200).send((helper().responseSuccessMessage('1', 'Password Changed Successfully', null, null)));
                }

            });
        }
    }
}
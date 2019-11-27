const empModel = require('../../common/models/employee');
const credentials = require('../../config/credentials');
const jwt = require('jsonwebtoken');
var _ = require('lodash');
const helper = require('../../common/helpers/helper');
const mongoose=require('mongoose');



module.exports = () => {
    return {
        getUser: (req, res) => {
            empModel.findById({'_id': mongoose.Types.ObjectId(req.params.id)}, (err, data) => {
                if(err) {
                    res.status(500).send(err);
                } else if(_.isEmpty(data)){
                    res.status(400).send(helper().responseErrorMessage('0', 'Invalid User', null));
                } else {
                    res.status(200).send((helper().responseSuccessMessage('1', 'Data fetched successfully', data, null)));
                }
            })
        }, 
        getOnboardingUsers: (req, res) => {
            empModel.find({ 'isAtmecsEmp': false }, (err, data) => {
                if (err) {
                    res.status(500).send(helper().responseErrorMessage('0', 'Invalid employee', null));
                }
                else {
                    res.status(200).send((helper().responseSuccessMessage('1', 'Details fetched successfully', data, null)));
                }
            });
        },
        userForVerification: (req, res) => {
            empModel.findById({ _id: mongoose.Types.ObjectId(req.params.id) }, (err, data) => {
                if (err) {
                    res.status(500).send(helper().responseErrorMessage('0', 'Invalid user', null));
                } else {
                    res.status(200).send(helper().responseSuccessMessage('1', 'Details fetched successfully', data, null));
                }
            })         
        },
        userVerified: (req, res) => {
            empModel.findOneAndUpdate({ '_id': mongoose.Types.ObjectId(req.params.id) }, { $set: { [req.body.key+'.isVerified'] : true } }, {new: true}, (err, data) => {
                if (err) {
                    res.status(400).send(helper().responseErrorMessage('0', 'Invalid details', null));

                }
                else {
                    res.status(200).send((helper().responseSuccessMessage('1', ' Data verified  successfully', data, null)));
                }
            });
        },
        saveRemarks: (req, res) => {
            empModel.findByIdAndUpdate({ '_id': mongoose.Types.ObjectId(req.params.id) }, { $set: {'remarks': req.body.remarks, 'status': 'Onhold'} }, {new: true}, (err, data) => {
                if (err) {
                    res.status(400).send(helper().responseErrorMessage('0', 'Invalid details', null));

                }
                else {
                    res.status(200).send((helper().responseSuccessMessage('1', 'Remarks saved successfully', null, null)));
                }
            });
        },
        userStatus: (req, res) => {
            empModel.findByIdAndUpdate({ '_id': mongoose.Types.ObjectId(req.params.id) }, {$set: {status:req.params.status}}, (err, data) => {
                if (err) {
                    res.status(500).send(helper().responseErrorMessage('0', 'Invalid employee status', null));
                }
                else {
                    res.status(200).send((helper().responseSuccessMessage('1', 'Employee status Verified Successfully', null, null)));
                }
            });
        },
        getAtmecsEmps: (req, res) => {
            var pageNo = parseInt(req.body.pageNo)
            var size = parseInt(req.body.size)
            
            if (pageNo < 0 || pageNo === 0) {
                res.status(400).send(helper().responseErrorMessage('0', 'invalid page number, should start with 1', null));
            }
            jwt.verify(req.body.token, credentials().secretKey, function (err, value) {
                if (err) {
                    res.send(err);
                }
                else {
                    // Find some documents
                    empModel.paginate({}, { page: pageNo, limit: size }, function(err, data) {

                        if (err) {
                            //response = { "error": true, "message": "Error fetching data" };
                            res.status(400).send(helper().responseErrorMessage('0', 'Error fetching data', null));
                        } else {
                            
                            res.status(200).send((helper().responseSuccessMessage('1', 'paging done Successfully', data, null)));
                         
                        }
                        //res.send(data);
                        
                    });
                }
            })
        },
        deleteEmployee: (req, res) => {
            empModel.findByIdAndDelete( { '_id': mongoose.Types.ObjectId(req.params.id) } ,(err,deletedata) => {
                if (err) {
                    console.log(err);
                    res.status(400).send(helper().responseErrorMessage('0', 'Invalid data', null));
                }
                else {
                    res.status(200).send((helper().responseSuccessMessage('1', ' data deleted Successfully', deletedata, null)));
                }
            });
        },
        onboardEmp: (req, res) => {
            empModel.findByIdAndUpdate({ '_id': mongoose.Types.ObjectId(req.params.id) }, {$set: {'isAtmecsEmp': true, 'empId': req.body.empId, 'officialEmail': req.body.officialEmail, 'designation': req.body.designation}}, (err, data) => {
                if (err) {
                    res.status(500).send(helper().responseErrorMessage('0', 'Invalid employee status', null));
                }
                else {
                    res.status(200).send((helper().responseSuccessMessage('1', 'Employee added Successfully', null, null)));
                }
            });
        }
            
    }
}
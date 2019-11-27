const jwt = require('jsonwebtoken');
const helper = require('../../common/helpers/helper');
const credentials = require('../../config/credentials');
const newUserService = require('../services/new_hire');
module.exports = (router) => {
    router.post('/saveUser', (req,res) => {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, credentials().secretKey, function (err, value) {
            if(err) {
                res.status(403).send(helper().responseErrorMessage('0', 'Invalid Token', null));

            } else {
                newUserService().saveUser(req,res);
            }
        });        
    });
    router.get('/getUser/:id', (req, res) => {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, credentials().secretKey, function (err, value) {
            if(err) {
                res.status(403).send(helper().responseErrorMessage('0', 'Invalid Token', null));
            } else {
                newUserService().getUser(req, res);
            }
        });     
    });
    router.put('/updateUser/:id', (req,res) => {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, credentials().secretKey, function (err, value) {
            if(err) {
                res.status(403).send(helper().responseErrorMessage('0', 'Invalid Token', null));
            } else {
                newUserService().updateUser(req,res);
            }
        });        
    });
    router.put('/isFresher/:id/:flag', (req, res) => {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, credentials().secretKey, function (err, value) {
            if(err) {
                res.status(403).send(helper().responseErrorMessage('0', 'Invalid Token', null));
            } else {
                newUserService().isFresher(req, res);
            }
        });     
    });
}
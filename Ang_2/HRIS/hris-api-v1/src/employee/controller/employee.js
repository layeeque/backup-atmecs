const jwt = require('jsonwebtoken');
const credentials = require('../../config/credentials');
const helper = require('../../common/helpers/helper');
const empService = require('../services/employee');

module.exports = (router) => {
    router.get('/getEmp/:id', (req, res) => {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, credentials().secretKey, function (err, value) {
            if(err) {
                res.status(403).send(helper().responseErrorMessage('0', 'Invalid Token', null));
            } else {
                empService().getUser(req, res);
            }   
        });     
    });
    router.get('/onboardingUsers', (req, res) => {
        var token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, credentials().secretKey, function (err, value) {
            if (err) {
                res.status(403).send(helper().responseErrorMessage('0', 'Invalid Token', null));
            }
            else {
                empService().getOnboardingUsers(req, res); 
            }
        });        
    });
    router.get('/getUserForVerification/:id', (req,res) => {
        var token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, credentials().secretKey, function (err, value) {
            if (err) {
                res.status(403).send(helper().responseErrorMessage('0', 'Invalid Token', null));
            }
            else {
                empService().userForVerification(req,res);
            }
        })        
    });
    router.put('/userVerified/:id', (req,res) => {
        var token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, credentials().secretKey, function (err, value) {
            if (err) {
                res.status(403).send(helper().responseErrorMessage('0', 'Invalid Token', null));
            }
            else {
                empService().userVerified(req,res);
            }
        })         
    });
    router.put('/userStatus/:id/:status', (req,res) => {
        var token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, credentials().secretKey, function (err, value) {
            if (err) {
                res.status(403).send(helper().responseErrorMessage('0', 'Invalid Token', null));
            }
            else {
                empService().userStatus(req,res);   
            }
        })        
    });
    router.put('/remarks/:id', (req,res) => {
        var token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, credentials().secretKey, function (err, value) {
            if (err) {
                res.status(403).send(helper().responseErrorMessage('0', 'Invalid Token', null));
            }
            else {
                empService().saveRemarks(req,res);
            }
        })         
    });
    router.post('/getAtmecsEmps', (req,res) => {
        empService().getAtmecsEmps(req,res);
    });
    router.delete('/deleteEmp/:id', (req,res) => {
        var token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, credentials().secretKey, function (err, value) {
            if (err) {
                res.status(403).send(helper().responseErrorMessage('0', 'Invalid Token', null));
            }
            else {
                empService().deleteEmployee(req,res);
            }
        })        
    });
    router.put('/onboardEmp/:id', (req,res) => {
        var token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, credentials().secretKey, function (err, value) {
            if (err) {
                res.status(403).send(helper().responseErrorMessage('0', 'Invalid Token', null));
            }
            else {
                empService().onboardEmp(req,res);
            }
        })        
    });  
}
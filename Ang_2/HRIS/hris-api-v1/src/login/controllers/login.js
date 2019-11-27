const jwt = require('jsonwebtoken');
const helper = require('../../common/helpers/helper');
const credentials = require('../../config/credentials');
const loginService = require('../services/login');

module.exports = (router) => {
    router.post('/login', (req,res) => {
        loginService().login(req,res);
    });
    router.post('/forgotPassword', (req,res) => {
       loginService().forgotPassword(req,res);
    });
    router.post('/changePassword/:id',(req,res)=>{
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, credentials().secretKey, function (err, value) {
            if(err) {
                res.status(403).send(helper().responseErrorMessage('0', 'Invalid Token', null))
            } else {
                loginService().changePassword(req,res);
            }
        });    
    })

}
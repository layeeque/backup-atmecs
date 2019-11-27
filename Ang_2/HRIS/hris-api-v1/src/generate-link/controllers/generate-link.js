const jwt = require('jsonwebtoken');
const helper = require('../../common/helpers/helper');
const credentials = require('../../config/credentials');
const genLinkService = require('../services/generate-link');

module.exports = (router) => {
    router.post('/generateLink', (req,res) => {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, credentials().secretKey, function (err, value) {
            if(err) {
                res.status(403).send(helper().responseErrorMessage('0', 'Invalid Token', null))
            } else {
                genLinkService().generateLink(req,res);
            }
        })        
    });
}
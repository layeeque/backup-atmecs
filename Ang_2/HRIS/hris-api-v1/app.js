const express = require('express');
const apps = express();
const router = express.Router();
const bodyParser = require('body-parser');
const db = require('./src/config/db');
const config = require('./src/config/config');
const helper = require('./src/common/helpers/helper');
const login = require('./src/login/controllers/login');
const uploads = require('./src/uploads/controllers/uploads');
const newHire = require('./src/new-hire/controllers/new_hire');
const generateLink = require('./src/generate-link/controllers/generate-link');
const employee = require('./src/employee/controller/employee');

const port = process.env.PORT || 8081;

db();

//cors implementation
apps.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});


apps.use(bodyParser.urlencoded());
apps.use(bodyParser.json());
apps.use('/api', router);
router.use(express.static('uploads'));

login(router);
        uploads(router);
        newHire(router);
        generateLink(router);
        employee(router);

// router.get('/valid', (req, res) => {
//     var requestIP = req.connection.remoteAddress;
//     if (requestIP.substr(0,7) == '::ffff:'){
//         requestIP = requestIP.substr(7);
//     }
//     if(config().whiteListIps.indexOf(requestIP) >= 0) {
//         login(router);
//         uploads(router);
//         newHire(router);
//         generateLink(router);
//         employee(router);
//         res.status(200).send(helper().responseSuccessMessage('1', 'authorized', null, null));
//     } else {
//         res.status(401).send(helper().responseErrorMessage('0', 'You are not authorized to access', null));
//     }
// })

apps.get('/check', (req, res) => {
    res.send(process.cwd());
})

apps.listen(port);
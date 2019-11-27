const mailer = require('pug-mailer');
const jwt = require('jsonwebtoken');
const UIDGenerator = require('uid-generator');   //to generate the unique id with nodejs
const uidgen = new UIDGenerator();
const helper = require('../../common/helpers/helper');
const credentials = require('../../config/credentials');
module.exports = () => {
    return {
        generateLink: (req, res) => {
			const generatedUid = uidgen.generateSync();
			const newHireToken = jwt.sign({'id':generatedUid, 'email': req.body.email, 'joiningDate': req.body.joiningDate}, credentials().secretKey, {
				expiresIn: '7d' // expires in 7 days
			});
			//var jd = new Date(req.body.joiningDate);
			var dateUTC = new Date(req.body.joiningDate);
			dateUTC = dateUTC.getTime();
			const jd = new Date(dateUTC);
			jd.setHours(jd.getHours()+5);
			jd.setMinutes(jd.getMinutes() + 30);
			const monthNames = ["January", "February", "March", "April", "May", "June",
				"July", "August", "September", "October", "November", "December"];
			const jdDate = jd.getDate();
			const jdYear = jd.getFullYear();
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
				template: 'onboarding_template',
				data: {
					hireName: req.body.name,
					ipAddress: credentials().dbIpAddress,
					newHireToken: newHireToken,
					generatedUid: generatedUid,
					joiningDate: monthNames[jd.getMonth()] + ' ' + jdDate + ',' + ' ' + jdYear,
					joiningTime: '10:30 AM',
					contactPerson: 'Ashwini Kumar Mishra / Harika Godugu'
				}
			}).then(response => 
				res.status(200).send(helper().responseSuccessMessage('1', 'Mail sent successfully', null, null))
			).catch(err => 
				res.status(500).send(helper().responseErrorMessage('0', 'Mail not sent', err))
			)
        }
    }
}

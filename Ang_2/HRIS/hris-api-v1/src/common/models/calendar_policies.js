const mongooseModel = require('mongoose');
const Schema = mongooseModel.Schema;

var calPolicySchema = new mongooseModel.Schema({
    docName: {
        type: String
    },
    docType: {
        type: String
    },
    docUrl: {
        type: String
    },
    updationDate: {
        type: String,
        default: new Date()
    }
});

var calPolDetails = mongooseModel.model('calender_policy', calPolicySchema);

module.exports = calPolDetails;

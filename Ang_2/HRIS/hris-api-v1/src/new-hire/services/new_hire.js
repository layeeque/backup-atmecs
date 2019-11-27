const jwt = require('jsonwebtoken');
const _ = require('lodash');
const credentials = require('../../config/credentials');
const mongoose=require('mongoose');
const empModel = require('../../common/models/employee');
const helper = require('../../common/helpers/helper');
module.exports = () => {
    return {
        saveUser: (req, res) => {
            empModel.find({'personalEmail': req.body.personalEmail}, (err, data) => {
                if(err) {
                    res.status(500).send(helper().responseErrorMessage('0', 'Something went wrong', null))
                } else if(_.isEmpty(data)) {
                    empModel.create(req.body, (err, record) => {
                        if (err) {
                            res.status(500).send(helper().responseErrorMessage('0', 'Something went wrong', null));
                        } else {
                            res.status(200).send(helper().responseSuccessMessage('1', 'Data saved successfully', record._id, null));
                        }
                    });
                } else {
                    res.status(200).send(helper().responseSuccessMessage('1', 'User already exists', data[0]._id, null));
                }
            })
        },
        getUser: (req, res) => {
            empModel.findById({'_id': mongoose.Types.ObjectId(req.params.id)}, (err, data) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send(helper().responseSuccessMessage('1', 'Details fetched successfully', data, null));
                }
            })
        },
        updateUser: (req, res) => {
            if(req.body.educationDetails != undefined && 'ssc' in req.body.educationDetails) {
                empModel.findByIdAndUpdate({'_id': mongoose.Types.ObjectId(req.params.id)}, { $set: {'educationalDetails': req.body.educationDetails} }, {new: true}, (err, data) => {
                    if (err) {
                        res.status(400).send(err);
                    } else {
                        res.status(200).send(helper().responseSuccessMessage('1', 'Details updated successfully', data, null));
                    }
                })
            } else if (_.findKey(req.body.skillSetDetails, 'skillName')) {
                empModel.findByIdAndUpdate({'_id': mongoose.Types.ObjectId(req.params.id)}, { $set: {'skillSetDetails.skillSet': req.body.skillSetDetails.skillSet} }, {new: true}, (err, data) => {
                    if (err) {
                        res.status(400).send(err);
                    } else {
                        res.status(200).send(helper().responseSuccessMessage('1', 'Details updated successfully', data, null));
                    }
                })
            } else if (_.findKey(req.body.technicalDetails, 'certificateName')) {
                empModel.findByIdAndUpdate({'_id': mongoose.Types.ObjectId(req.params.id)}, { $set: {'technicalDetails.technicalOrBusiness': req.body.technicalDetails.technicalOrBusiness} }, {new: true}, (err, data) => {
                    if (err) {
                        res.status(400).send(err);
                    } else {
                        res.status(200).send(helper().responseSuccessMessage('1', 'Details updated successfully', data, null));
                    }
                })
            } else {
                empModel.findByIdAndUpdate({'_id': mongoose.Types.ObjectId(req.params.id)}, {$set: req.body}, {new: true}, (err, data) => {
                    if (err) {
                        res.status(500).send(err);
                    } else {
                        res.status(200).send(helper().responseSuccessMessage('1', 'Details updated successfully', data, null));
                    }
                })
            }
        },
        isFresher: (req, res) => {
            empModel.findByIdAndUpdate({'_id': mongoose.Types.ObjectId(req.params.id)}, {$set: {'employmentDetails.isFresher': req.params.flag}}, {new: true}, (err, data) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send(helper().responseSuccessMessage('1', 'Details fetched successfully', data, null));
                }
            })
        }
    }
}
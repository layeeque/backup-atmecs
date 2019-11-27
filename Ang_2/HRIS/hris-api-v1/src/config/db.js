const credentials = require('./credentials');

module.exports = () => {
    const mongoose = require('mongoose');
    const db = mongoose.connection;
    mongoose.Promise = global.Promise;   //aysnc oprations
    mongoose.connect('mongodb://' + credentials().dbIpAddress + ':' + credentials().dbPort + '/' + credentials().dbName);
}
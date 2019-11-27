'use strict';

exports.handler = (event, context, callback) => {
    const request = event.Records[0].cf.request;
    const headers = request.headers;

    if (request.uri === '/dynamic/dynamic') {
        const response = {
        status: '302',
        statusDescription: 'Found',
        headers: {
            location: [{
                key: 'Location',
                value: 'https://layeeque.github.io/jetbluePOC-customOrigin/custom-origin.html',
            }],
        },
    };
    
    callback(null, response);
        return;
    }
    
        if (request.uri === '/dynamic/heroku') {
        const response = {
        status: '302',
        statusDescription: 'Found',
        headers: {
            location: [{
                key: 'Location',
                value: 'https://jetblue-poc.herokuapp.com/index.html',
            }],
        },
    };
    
    callback(null, response);
        return;
    }
    

  
    callback(null, request);
};
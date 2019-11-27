 // lambda function for AWSCF -4
'use strict';
exports.handler = (event, context, callback) => {
    const request = event.Records[0].cf.request;
    const headers = request.headers;
    var response;
    if (request.uri === '' && headers['cloudfront-is-desktop-viewer'] && headers['cloudfront-is-desktop-viewer'][0].value === 'true') {

        response = {
            status: '200',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: 'https://www.jetblue.com'
                }],
            },
        };
        callback(null, response);
    }
    else if (request.uri === '' && headers['cloudfront-is-mobile-viewer'] && headers['cloudfront-is-mobile-viewer'][0].value === 'true') {
        response = {
            status: '200',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: 'https://mobile.jetblue.com',
                }],
            },
        };
        callback(null, response);
    }
}
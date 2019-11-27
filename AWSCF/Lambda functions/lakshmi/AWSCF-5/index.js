'use strict';
exports.handler = (event, context, callback) => {
    const request = event.Records[0].cf.request;
    const headers = request.headers;
    if (request.uri === '/country/flight' && headers['cloudfront-viewer-country']) {
        var countryCode = headers['cloudfront-viewer-country'][0].value;
        var url = '';
        //countryCode for Mexico
        if (countryCode === 'MX') {
            url = 'https://www-dev2.jetblue.com/destinations/cancun-mexico-flights';
        }
          //countryCode for Jamaica
        else if (countryCode === 'JM') {
            url = 'https://www-dev2.jetblue.com/destinations/kingston-jamaica-flights';
        }
        else {
            url = 'https://www-dev2.jetblue.com/destinations';
        }
        const response = {
            status: '302',
            statusDescription: 'Found',
            headers: {
                location: [{
                    key: 'Location',
                    value: url,
                }],
            },
        };
        callback(null, response);
    }
}
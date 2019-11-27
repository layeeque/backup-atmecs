'use strict';
exports.handler = (event, context, callback) => {
    const request = event.Records[0].cf.request;
    const headers = request.headers;
    const redirect_uri = ['/contact-us/', '/about-us/', '/news/', '/partners/', '/signin', '/flightsdestination', '/nearby', '/destinations/', '/build', '/healthz', '/ready', '/error', '/flights',
        '/signout', '/ui-assets/', '/ui-assets', '/destinations', '/signin/', '/flightsdestination/', '/nearby/', '/build/', '/healthz/', '/ready/', '/error/', '/flights/',
        '/signout/', '/ui-assets/', '/flight-tracker-and-status/', '/flight-tracker-and-status', '/trueblue', '/trueblue/', '/trueblue/', '/magnoliaauthor/', '/magnoliapublic/',
        '/at-the-airport/', '/at-the-airport/special-assistance/', '/traveling-together/', '/customer-assurance/', '/travel-agents/', '/jetblue-for-good/', '/sustainability/',
        '/booking', '/booking/', '/our-company/', '/magnoliaauthor', '/magnoliapublic', '/at-the-airport', '/at-the-airport/special-assistance', '/traveling-together',
        '/customer-assurance', '/our-company', '/travel-agents', '/jetblue-for-good', '/sustainability', '/manifest.json', '/ngsw.json', '/flying-with-us', '/flying-with-us/',
        '/at-the-airport/accessibility-assistance'];
    // lambda function for AWSCF -4
    var response;
    if (request.uri === '/' && headers['cloudfront-is-desktop-viewer'] && headers['cloudfront-is-desktop-viewer'][0].value === 'true') {
        response = {
            status: '302',
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
    else if (request.uri === '/' && headers['cloudfront-is-mobile-viewer'] && headers['cloudfront-is-mobile-viewer'][0].value === 'true') {
        response = {
            status: '302',
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
    //lambda function for AWSCF -5
    else if (request.uri === '/country/flight' && headers['cloudfront-viewer-country']) {
        var countryCode = headers['cloudfront-viewer-country'][0].value;
        var url = '';
        if (countryCode === 'MX') {
            url = 'https://www-dev2.jetblue.com/destinations/cancun-mexico-flights';
        }
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
    //Lambda function for AWSCF -13
    else if (redirect_uri.includes(request.uri)) {
        request.origin = {
            custom: {
                domainName: 'dev.b6orgeng.net',
                port: 443,
                protocol: 'https',
                path: '',
                sslProtocols: ['TLSv1.2'],
                readTimeout: 5,
                keepaliveTimeout: 5,
                customHeaders: {}
            }
        };
        request.headers['host'] = [{ key: 'host', value: 'dev.b6orgeng.net' }];
        return callback(null, request);
    }
    else {
        return callback(null, request);
    }
};

'use strict';
exports.handler = (event, context, callback) => {
    const request = event.Records[0].cf.request;
    const headers = request.headers;
    if (request.uri === '/careers/'
        || request.uri === '/contact-us/'
        || request.uri === '/about-us/'
        || request.uri === '/news/'
        || request.uri === '/partners/'
        || request.uri === '/signin'
        || request.uri === '/flightsdestination'
        || request.uri === '/nearby'
        || request.uri === '/destinations/'
        || request.uri === '/build'
        || request.uri === '/healthz'
        || request.uri === '/ready'
        || request.uri === '/error'
        || request.uri === '/flights'
        || request.uri === '/signout'
        || request.uri === '/ui-assets/'
        || request.uri === '/ui-assets'
        || request.uri === '/destinations'
        || request.uri === '/signin/'
        || request.uri === '/flightsdestination/'
        || request.uri === '/nearby/'
        || request.uri === '/build/'
        || request.uri === '/healthz/'
        || request.uri === '/ready/'
        || request.uri === '/error/'
        || request.uri === '/flights/'
        || request.uri === '/signout/'
        || request.uri === '/ui-assets/'
        || request.uri === '/flight-tracker-and-status/'
        || request.uri === '/flight-tracker-and-status'
        || request.uri === '/trueblue'
        || request.uri === '/trueblue/'
        || request.uri === '/trueblue/'
        || request.uri === '/magnoliaauthor/'
        || request.uri === '/magnoliapublic/'
        || request.uri === '/at-the-airport/'
        || request.uri === '/at-the-airport/special-assistance/'
        || request.uri === '/traveling-together/'
        || request.uri === '/customer-assurance/'
        || request.uri === '/travel-agents/'
        || request.uri === '/jetblue-for-good/'
        || request.uri === '/sustainability/'
        || request.uri === '/booking'
        || request.uri === '/booking/'
        || request.uri === '/our-company/'
        || request.uri === '/magnoliaauthor'
        || request.uri === '/magnoliapublic'
        || request.uri === '/at-the-airport'
        || request.uri === '/at-the-airport/special-assistance'
        || request.uri === '/traveling-together'
        || request.uri === '/customer-assurance'
        || request.uri === '/our-company'
        || request.uri === '/travel-agents'
        || request.uri === '/jetblue-for-good'
        || request.uri === '/sustainability'
        || request.uri === '/manifest.json'
        || request.uri === '/ngsw.json'
        || request.uri === '/flying-with-us'
        || request.uri === '/flying-with-us/'
        || request.uri === '/at-the-airport/accessibility-assistance'
    ) {
        request.origin = {
            custom: {
                domainName: 'dev.b6orgeng.net',
                port: 443,
                protocol: 'https',
                path: '',
                sslProtocols: ['TLSv1', 'TLSv1.1', 'TLSv1.2'],
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

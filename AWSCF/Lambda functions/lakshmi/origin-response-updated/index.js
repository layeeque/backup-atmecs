'use strict';
exports.handler = (event, context, callback) => {
    //Get contents of response
    const response = event.Records[0].cf.response;
    const headers = response.headers;
    //Set new headers 
    headers['strict-transport-security'] = [{ key: 'Strict-Transport-Security', value: 'max-age= 63072000  ; includeSubdomains; preload' }];
    headers['x-content-type-options'] = [{ key: 'X-Content-Type-Options', value: 'nosniff' }];
    headers['x-frame-options'] = [{ key: 'X-Frame-Options', value: 'DENY' }];
    headers['x-xss-protection'] = [{ key: 'X-XSS-Protection', value: '1; mode=block' }];
    headers['referrer-policy'] = [{ key: 'Referrer-Policy', value: 'same-origin' }];
    headers['content-encoding'] = [{ key: 'Content-Encoding', value: 'gzip' }];
    headers['x-dns-prefetch-control'] = [{ key: 'X-DNS-Prefetch-Control', value: 'off' }];
    headers['x-download-options'] = [{ key: 'X-Download-Options', value: 'noopen' }];
    headers['vary'] = [{ key: 'Vary', value: 'Accept-Encoding' }];
    //Return modified response
    callback(null, response);
};
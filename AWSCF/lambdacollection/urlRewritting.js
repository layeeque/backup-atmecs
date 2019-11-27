'use strict';

exports.handler = (event, context, callback) => {
    const request = event.Records[0].cf.request;
    const headers = request.headers;

    if (request.uri === '/customerSupport') {
       request.uri ='/support/section/default/customerSupport.html'
        callback(null, request);
        return;
    }
    else

    callback(null, request);
};

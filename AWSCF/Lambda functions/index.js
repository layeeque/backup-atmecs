'use strict';

const userAgent = require('useragent');
const util = require('util');

/* This is an origin request function */
 exports.handler = (event, context, callback) => {
    const request = event.Records[0].cf.request;

    const httpVersion = request.httpVersion;
    const clientIp= request.clientIp;
    const method = request.method;
    const uri = request.uri;
    const headers = request.headers;

    const userAgentString = headers['user-agent'][0].value;
    const agent = userAgent.lookup(userAgentString)
   

    if(
        agent.family === 'Chrome' && agent.major >= 23 ||
        agent.family === 'Opera' && agent.major >= 15 ||
        agent.family === 'Android' && agent.major >= 53 ||
        agent.family === 'Chrome Mobile' && agent.major >= 53 ||
        agent.family === 'Opera Mobile' && agent.major >= 37 ||
        agent.family === 'UC Browser' && agent.major >= 11 ||
        agent.family === 'Samsung Internet' && agent.major >= 4 
    )
    {
        headers['WebpSupport']=[{key:'WebPSupport',value:'Yes'}];
    }else{
        headers['WebpSupport']=[{key:'WebPSupport',value:'No'}];
    }

  
    callback(null, request);
 };
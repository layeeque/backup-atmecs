'use strict';



exports.handler = (event, context, callback) => {
   
     
     const request = event.Records[0].cf.request;
     const headers = request.headers;
     var countryCode;
     var url;
    if (request.uri === '/country/country.html' && headers['cloudfront-viewer-country']) {
         
         countryCode = headers['cloudfront-viewer-country'][0].value;
        if (countryCode === 'DE') {
            url = 'https://s3.amazonaws.com/jetblue-poc/country/germany.html';
        } 
        else if (countryCode === 'US') {
            url = 'https://s3.amazonaws.com/jetblue-poc/country/america.html';
        }
        else if(countryCode === 'IN'){
              url = 'https://s3.amazonaws.com/jetblue-poc/country/india.html';
        }
        else{
             url = 'https://s3.amazonaws.com/jetblue-poc/country/default.html';
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
  else
    {
          const response = {
        status: '302',
        statusDescription: 'Found',
        uri:request.uri,
        headers: {
            location: [{
                key: 'Location',
                value: 'http://docs.aws.amazon.com/lambda/latest/dg/lambda-edge.html',
            }],
        },
    };
    callback(null, response);
    }
  
}


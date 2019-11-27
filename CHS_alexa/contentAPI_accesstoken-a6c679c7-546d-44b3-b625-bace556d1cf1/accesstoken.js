var request = require('request');
var AT;

module.exports = {
    
    accesstoken : function(cstoken) {
        return new Promise(resolve => { 
            var options = {
        method: 'POST',
        url: 'https://api-auth-a.staging.creditsights.com/auth',
        headers: {
            'content-type': 'application/json'
        },
        body: {"CsToken" : cstoken},
        json: true
    };

    request(options, function(error, response, body) {
        if (error) throw new Error(error);
        AT = response.body.AccessToken;
    });
    console.log("AT body out",AT);
    setTimeout(() => {
           resolve(AT); }, 6000 );
        });
    
    }         
}; 

var request = require('request');
var queryresult;

module.exports = {
    
    graphqlfunc : function(at, gquery) {
        return new Promise(resolve => {
            console.log(at);
        console.log(gquery);
        var options1 = {
            method: 'POST',
            url: 'https://api-content-a.staging.creditsights.com/content/query',
            encoding: null,
            headers: {
                'Authorization': 'Bearer ' + at
             },
            body: { "query": gquery },
            json: true
        };
        
        request(options1, function(error, response, body) {
                if (error) throw new Error(error);
                queryresult = body;
            });
        console.log("in graphql : " + queryresult);
        setTimeout(() => {
           resolve(queryresult); }, 14000 );
        
        });
    }
};
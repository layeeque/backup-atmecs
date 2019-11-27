var request = require("request");
var token = require("./accesstoken.js");
var graphql = require('./graphql.js');

var gquery='';
var AT ;
var query ;
var queryresult;


exports.handler = async function(event, context, callback) {
    
    var ticker = event.ticker;
    var issuer = event.issuer;
    var view = event.csview;
    var cstoken = event.cstoken; //string
    console.log(cstoken)
    
    //ticker
    if( ticker == 'ticker' && issuer == undefined  && view == undefined)
    {
        gquery ='{ allIssuers(sort: displayName, take: 10000) { results { displayName displayTicker } }}';
    }
    
    // issuer
    else if( ticker == 'issuer' && issuer == undefined  && view == undefined)
    {
         gquery ='{ allIssuers( precacheTearsheets: true sort: displayName take: 10000 ) { results { displayName displayTicker latestRec { changedDate comment publishDate weighting } tearsheet { content { subSections(keys: [\"eventrisk\", \"profile\"]) { key title body } } } } }}';
    }
    
    //issuer/{ticker}
    if( ticker == 'issuer' && issuer != undefined  && view == undefined)
    {
         gquery ='{ allIssuers( filter: { ticker: "'+issuer+'" } ) { results { displayName displayTicker latestRec { weighting publishDate changedDate } tearsheet { content { subSections(keys: [\"eventrisk\", \"profile\"]) { key title body } } } } }}';
    }
    
    //issuer/{ticker}/event_risk
    else if( ticker == 'issuer' && issuer != undefined  && view == 'event_risk')
    {
         gquery ='{ allIssuers( filter: { ticker: "'+issuer+'" } ) { results { displayName displayTicker tearsheet { content { subSections(keys: [\"eventrisk\"]) { key title body } } } } }}';
    }
    
    //issuer/{ticker}/business_profile  
    if( ticker == 'issuer' && issuer != undefined  && view == 'business_profile')
    {
         gquery ='{ allIssuers( filter: { ticker: "'+issuer+'" } ) { results { displayName displayTicker tearsheet { content { subSections(keys: [\"profile\"]) { key title body } } } } }}';
    }
    
    //issuer/{ticker}/csview
    else if( ticker == 'issuer' && issuer != undefined  && view == 'csview')
    {
         gquery ='{ allIssuers( filter: { ticker: "'+issuer+'" } ) { results { displayName displayTicker latestRec { weighting publishDate changedDate } } }}';
    }
    
    //if(cstoken) {
        AT = await token.accesstoken(cstoken);
    //}
    console.log("outside Access token : ",AT);
    console.log("Env Variable : " + process.env.dev_url);
   
    console.log(gquery);
    //if(AT) {
    query = await graphql.graphqlfunc(AT,gquery);
    //}
    
    console.log("Graphql  : ",query);
    
    // var AT = accesstoken(cstoken);
    // console.log("Access Token : " + AT);
    // var query = graphqlfunc(AT,gquery);
    // console.log("Graphql : " + query);
   
   return callback(null,query);
};




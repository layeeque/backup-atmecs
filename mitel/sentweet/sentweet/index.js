const Twitter = require('twitter');
const express = require('express');
const app = express();
const request = require('request');

let client = new Twitter({
    consumer_key: 'Lcc9CR2RvY4KjZeVVn9i7PdvM',
    consumer_secret: 'lMtomLB92iARsJC2xwWluD6gjXV6y17vwJyCJmDhbM4QBxWWjT',
    access_token_key: '76814776-takbYvJcsZRKiMiRDOmw22rYV5mUCCr0uJvXGhrtj',
    access_token_secret: 'U62XpQ8tU2ipDl2O0UHlSa4aqV0VSnanAqFOeP0F7Cy7E'
  });

/*   var stream = client.stream('statuses/filter', {track: 'javascript'});
  stream.on('data', function(event) {
    console.log(event && event.text);
  });
   
  stream.on('error', function(error) {
    throw error;
  }); */  

 /*  client.get('search/tweets', {q: 'PMOindia', lang: 'en', count: 100}, function(error, tweets, response) {
    console.log(tweets);
 }); */
 let neg; 
 let pos;
 let fresult = [];
 app.get('/test', function (req, res) {
    client.get('search/tweets', {q: '#Demonetisation', lang: 'en', count: 100, result_type: 'popular'}, async function(error, tweets, response) {
          //console.log(tweets.statuses[0].text);
          //try {
            neg=0;
            pos=0;
            prolist(tweets.statuses, function(stat) {
              if (stat == 'true') {
               // console.log(fresult);
                res.send(neg + "/" + pos);
              }
            });

          /* } catch(err) {
            console.log(err);
          } */

      });

     // res.send(pos+"/"+neg);
});

async function prolist(array, callback) {
/*     for (let i = 0; i < array.length; i++) {
      getsent(array[i].text, function(score){
      console.log(score + " " + array[i].text)
      //fresult.push({'score':score,'text':array[i].text})
      if (score < 0) {
        neg = neg + 1;
      } else {
        pos = pos + 1;
      }
    })
    } */
    for (const item of array) {
      getsent(item.text.substring(0, 70), function(score){
        console.log(score + " " + item.text.substring(0, 70))
        fresult.push({'score':score})
        if (score < 0) {
          neg = neg + 1;
        } else {
          pos = pos + 1;
        }
    });
    await delayedLog(item);
}
callback('true');
}

function getsent (tline, callback) {
      let options1 = { method: 'POST',
      url: 'https://language.googleapis.com/v1beta2/documents:analyzeSentiment?key=AIzaSyCh-H9fxZXaR43dQQgg4FIwLWpAX2L5C7E',
      headers:
          {   'cache-control': 'no-cache',
              'content-type': 'application/json' },
      body:
          {
            'document':{
            'type':'PLAIN_TEXT',
            'content': tline
          }
        },
      json: true };

      request(options1, function (error, response, body) {
      //console.log(response);
      if (body.error != 'undefined') {
        callback(body.documentSentiment.score);
      } else {
        callback(0);
      }


    });
}

function delay() {
  return new Promise(resolve => setTimeout(resolve, 300));
}

async function delayedLog(item) {
  await delay();
  //console.log(item);
}


 app.listen(3000, () => console.log('Example app listening on port 3000!'))
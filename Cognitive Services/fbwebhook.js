const express = require('express');
const bodyParser = require('body-parser');
var https = require('https');
var request = require("request");
var $ = require("jQuery");

var http = require("http");
const restService = express();

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());
restService.post('/echo', function (req, res) {
    console.log("i am in rest sevice block");
    var subscriptionKey = "678748e57e774f92a9e1fde09531ee65";
    var uriBase = "https://westcentralus.api.cognitive.microsoft.com/vision/v1.0/ocr";

    var params = {
        "language": "unk",
        "detectOrientation ": "true",
    };


    var sourceImageUrl = req.body.originalRequest.data.message.attachments[0].payload.url;
    //var sourceImageUrl = JSON.stringify(req.body);
    console.log("url of image is " + sourceImageUrl)
    // document.querySelector("#sourceImage").src = sourceImageUrl;

    // Perform the REST API call.
    // $.ajax({
    //     url: uriBase + "?" + $.param(params),

    //     // Request headers.
    //     beforeSend: function (jqXHR) {
    //         jqXHR.setRequestHeader("Content-Type", "application/json");
    //         jqXHR.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
    //     },

    //     type: "POST",

    //     // Request body.
    //     data: '{"url": ' + '"' + sourceImageUrl + '"}',
    // })

    //     .done(function (data) {
    //         // Show formatted JSON on webpage.
    //         console.log(data.language);
    //         //console.log(JSON.parse(data))
    //         for (var key in data) {
    //             // if (data.hasOwnProperty(key)) {
    //             //      if(data.hasOwnProperty(key)=="text"){
    //             //     var val = data[key];
    //             //     console.log(val);
    //             //      }
    //             // }
    //         }

    //         $("#responseTextArea").val(JSON.stringify(data, null, 2));
    //     })

    //     .fail(function (jqXHR, textStatus, errorThrown) {
    //         // Display error message.
    //         var errorString = (errorThrown === "") ? "Error. " : errorThrown + " (" + jqXHR.status + "): ";
    //         errorString += (jqXHR.responseText === "") ? "" : (jQuery.parseJSON(jqXHR.responseText).message) ?
    //             jQuery.parseJSON(jqXHR.responseText).message : jQuery.parseJSON(jqXHR.responseText).error.message;
    //         alert(errorString);
    //     });
    //==================================================================================================================




    var options = {
        method: 'POST',
        url: uriBase + "?language=unk&detectOrientation=true",
        headers:
            {

                'Cache-Control': 'no-cache',
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key': '678748e57e774f92a9e1fde09531ee65'
            },
        body: { "url": sourceImageUrl },
        json: true
    };

    console.log("current url" + options.url)


    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(JSON.stringify(body));
        var i = 0;
        //var datam = ""
        var datam = ""
        var k=0
        // Show formatted JSON on webpage.
        //console.log(JSON.stringify(body));
        //console.log(JSON.parse(data))
        for (var key in body) {
            console.log("hello")

            if (body.hasOwnProperty(key) && (Object.keys(body.regions[0].lines[i].words).length) != 0) {
                console.log("length of line is " + Object.keys(body.regions[0].lines[i].words).length)
            
                for (var j = 0; j < Object.keys(body.regions[0].lines[i].words).length; j++) {

                    datam = datam + body.regions[0].lines[i].words[j].text + " "
                    //datam[k++] = body.regions[0].lines[i].words[j].text + " "
                    console.log(datam);
                }

            }
            i++
        }
        return res.json({
            speech: datam,
            displayText: "record inserted",
            source: 'webhook-echo-sample',

        });
    });
})



restService.listen((process.env.PORT || 8000), function () {
    console.log("Server up and listening urweyruwery")

});
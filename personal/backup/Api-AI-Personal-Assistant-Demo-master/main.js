var accessToken = "dce399808780466db898fad9bfae71fe",
  baseUrl = "https://api.api.ai/v1/",
  $speechInput,
  $recBtn,
  recognition,
  messageRecording = "Recording...",
  messageCouldntHear = "I couldn't hear you, could you say that again?",
  messageInternalError = "Oh no, there has been an internal server error",
  messageSorry = "I'm sorry, I don't have the answer to that yet.";
var texta = "";
var completeData = "";
$(document).ready(function () {
  $speechInput = $("#speech");
  $recBtn = $("#rec");

  $speechInput.keypress(function (event) {
    if (event.which == 13) {
      event.preventDefault();
      send();
    }
  });
  $recBtn.on("click", function (event) {
    switchRecognition();
  });
  $(".debug__btn").on("click", function () {
    $(this).next().toggleClass("is-active");
    return false;
  });
});

function startRecognition() {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onstart = function (event) {
    respond(messageRecording);
    updateRec();
  };
  recognition.onresult = function (event) {
    recognition.onend = null;

    var text = "";
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      text += event.results[i][0].transcript;
    }
    setInput(text);
    stopRecognition();
  };
  recognition.onend = function () {
    respond(messageCouldntHear);
    stopRecognition();
  };
  recognition.lang = "en-US";
  recognition.start();
}

function stopRecognition() {
  if (recognition) {
    recognition.stop();
    recognition = null;
  }
  updateRec();
}

function switchRecognition() {
  if (recognition) {
    stopRecognition();
  } else {
    startRecognition();
  }
}

function setInput(text) {
  $speechInput.val(text);
  send();
}

function updateRec() {
  $recBtn.text(recognition ? "Stop" : "Speak");
}

function send() {
  var text = $speechInput.val();
  texta = text;
  $.ajax({
    type: "POST",
    url: baseUrl + "query",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    headers: {
      "Authorization": "Bearer " + accessToken
    },
    data: JSON.stringify({ query: text, lang: "en", sessionId: "yaydevdiner" }),

    success: function (data) {
      prepareResponse(data);
    },
    error: function () {
      respond(messageInternalError);
    }
  });
}

function prepareResponse(val) {
  var debugJSON = JSON.stringify(val, undefined, 2),
    spokenResponse = val.result.speech;

  respond(spokenResponse);
  debugRespond(debugJSON);
}

function debugRespond(val) {
  $("#response").text(val);
}

function respond(val) {
  if (val == "") {
    val = messageSorry;
  }

  if (val !== messageRecording) {
    var msg = new SpeechSynthesisUtterance();
    msg.voiceURI = "native";
    msg.text = val;
    msg.lang = "en-US";
    window.speechSynthesis.speak(msg);
  }

  $("#spokenResponse").addClass("is-active").find(".spoken-response__text").html(val);
  $("#speech").val("");
  completeData = completeData + texta + ". " + val + ". "
}
function getTextSummary() {
  var myHeaders = new Headers();
  console.log(completeData)
  // var data = new FormData();

  // data = data.append("json", JSON.stringify(completeData));

  // data = JSON.parse('{ \"title\" : "' + completeData + ' "}')
  datam = ' { "title" : "' + completeData + '" } '
  console.log(datam)
  URL = "http://127.0.0.1:5000/todo/api/v1.0/tasks"

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = callbackFunction(xmlhttp);
    xmlhttp.open("POST", URL, false);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.setRequestHeader('Authorization', 'Basic ' + window.btoa('apiusername:apiuserpassword')); //in prod, you should encrypt user name and password and provide encrypted keys here instead 
    xmlhttp.onreadystatechange = callbackFunction(xmlhttp);
    xmlhttp.send(datam);
    
    document.getElementById("summary").innerHTML =xmlhttp.responseText

  // var myHeaders = new Headers();
  // // myHeaders.append('Access-Control-Allow-Origin', '*');
  // myHeaders.append('Content-Type', 'application/json');
  // // myHeaders.append()
  // var myInit = {
  //   headers:  {
  //   'Accept': 'application/json, text/plain, */*',
  //   'Content-Type': 'application/json'
  // },
  //   body: data,
  //   method: "POST"
  //   // mode: 'cors'
  // };


  // fetch('http://127.0.0.1:5000/todo/api/v1.0/tasks', myInit).then(function (response)
  // { console.log(response.body)
  //   return response.body })




  // fetch("http://127.0.0.1:5000/todo/api/v1.0/tasks",
  //   {
  //     method: "POST",
  //     body: data

  //   }, myInit)
  //   .then(function (res) { return res.json(); })
  //   .then(function (data) { alert(JSON.stringify(data)) })

}

function callbackFunction(xmlhttp) 
{
    //alert(xmlhttp.responseXML);
}
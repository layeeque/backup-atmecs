var accessToken = "dcc8dee89e6c4b38b7ca2738f6228646",
  baseUrl = "https://api.api.ai/v1/",
  $speechInput,
  $recBtn,
  recognition,
  messageRecording = "Recording...",
  messageCouldntHear = "I couldn't hear you, could you say that again?",
  messageInternalError = "Oh no, there has been an internal server error",
  messageSorry = "I'm sorry, I don't have the answer to that yet.";
var temp = "";
var temp1 = "";
var str = "";
var str1 = "";
var cont = "";
var cont1 = "";
var i = 0;
var j = 0;
var n = "";
var m = "";
var bar = "";
var flag = "";
var selected_value = "";
var pid = 0;


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

//=====================================================================================send()================================================================================
function send() {
  var text = "";
  str1 = "";
  var don =$speechInput.val();
  if (flag == true && don == "") {
    text = selected_value;
    console.log("selected value :" + selected_value);

  }
  else {

    if(pid>0)
    {
      var temppid=pid;
      deletebutton(temppid);

    }
    text = $speechInput.val();
    $("#speech").val('');

    var innerDiv = document.createElement('div');
    innerDiv.innerHTML = ("&nbsp; &nbsp; &nbsp;" + text + "&nbsp; &nbsp; &nbsp;" + "<br/>");
    innerDiv.className = "speech";
    innerDiv.id = i;
    i++;
    $("#spokenResponse").addClass("is-active").find(".spoken-response__text").append(innerDiv);
    $("#spokenResponse").addClass("is-active").find(".spoken-response__text").append("<br/><br/><br/><br/>");
    var innerDiv1 = document.createElement('div');
    innerDiv1.id = i;
    var currentTime = new Date();
    var hour = currentTime.getHours();
    var min = currentTime.getMinutes();
    var sec = currentTime.getSeconds();
    innerDiv1.innerHTML = ("&nbsp; &nbsp;" + hour + " hrs : " + min + " mins : " + sec + " secs &nbsp; &nbsp; &nbsp;<br/><br/>");
    $("#spokenResponse").addClass("is-active").find(".spoken-response__text").append(innerDiv1);
    innerDiv1.className = "timing";
    $("#spokenResponse").addClass("is-active").find(".spoken-response__text").append("<br/><br/><br/><br/>");
  }
  i++;

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

      cont = data.result.speech;
      n = cont.includes("http://");
      var prompt = cont.includes("prompt");
      var iframes = cont.includes("iframes");
      var ptext = cont.includes("passwordtextbox");
      var images = cont.includes("images");
      console.log("first response data: " + cont)
      console.log("first response " + n);
      flag = false;
      //=======================================creating text box for password==================
      if (ptext == true) {
        var it = i;
        var textbox = document.createElement('span');
        textbox.id = i;
        textbox.innerHTML = ("&nbsp;<input type='password' id='pass" + it + "'  style='height:40px;width:200px;text-align:center;font-size:20px' placeholder='Enter your Password'>&nbsp;&nbsp;&nbsp;&nbsp;");

        var innerDiv1 = document.createElement('span');
        innerDiv1.id = i;
        innerDiv1.innerHTML = ("&nbsp;<input type='button' id='pass1" + it + "' class='btn btn-primary' style='height:40px;width:100px;text-align:center;font-weight:20px;font-size: 12px;font-family: cursive;font-weight: bolder;color: white;background-color: seagreen;border-color: blueviolet;' value='clickme ' onclick='funcpassword(\"" + it + "\")'>&nbsp;&nbsp;&nbsp;&nbsp;");
        $("#spokenResponse").addClass("is-active").find(".spoken-response__text").append(textbox);
        $("#spokenResponse").addClass("is-active").find(".spoken-response__text").append(innerDiv1);
        i++;
        return;
      }
      if (iframes == true) {
        console.log("i am in images block");
        var res = cont.split(" ");
        var img = document.createElement('iframe');
        console.log("res 1 the value of url " + res[1]);
        img.id = i;
        img.src = res[1];
        img.style.width = 600;
        img.style.height = 320;
        var innerDiv = document.createElement('div');
        $("#spokenResponse").addClass("is-active").find(".spoken-response__text").append(img);
        $("#spokenResponse").addClass("is-active").find(".spoken-response__text").append("<br/><br/>");
        var innerDiv1 = document.createElement('div');
        innerDiv1.id = i;
        var currentTime = new Date();
        var hour = currentTime.getHours();
        var min = currentTime.getMinutes();
        var sec = currentTime.getSeconds();
        // innerDiv1.innerHTML = ("&nbsp; &nbsp;" + hour + " hrs : " + min + " mins : " + sec + " secs&nbsp; &nbsp; &nbsp;");
        innerDiv1.innerHTML = ("&nbsp; &nbsp;" + hour + " hrs : " + min + " mins : " + sec + " secs &nbsp; &nbsp; &nbsp;");
        $("#spokenResponse").addClass("is-active").find(".spoken-response__text").append(innerDiv1);
        innerDiv1.className = "timinganswer";
        $("#spokenResponse").addClass("is-active").find(".spoken-response__text").append("<br/><br/><br/><br/><br/>");
        i++;
        return;
      }

      if (images == true) {
        console.log("i am in images block");
        var res = cont.split(" ");
        var img = document.createElement('img');
        console.log("res 1 the value of url " + res[1]);
        img.id = i;
        img.src = res[1];
        img.style.width = 300;
        img.style.height = 250
        var innerDiv = document.createElement('div');
        //innerDiv.innerHTML = document.write(img);
        $("#spokenResponse").addClass("is-active").find(".spoken-response__text").append(img);
        $("#spokenResponse").addClass("is-active").find(".spoken-response__text").append("<br/><br/>");
        var innerDiv1 = document.createElement('div');
        innerDiv1.id = i;
        var currentTime = new Date();
        var hour = currentTime.getHours();
        var min = currentTime.getMinutes();
        var sec = currentTime.getSeconds();
        innerDiv1.innerHTML = ("&nbsp; &nbsp;" + hour + " hrs : " + min + " mins : " + sec + " secs &nbsp; &nbsp; &nbsp;");
        $("#spokenResponse").addClass("is-active").find(".spoken-response__text").append(innerDiv1);
        innerDiv1.className = "timinganswer";
        $("#spokenResponse").addClass("is-active").find(".spoken-response__text").append("<br/><br/><br/><br/><br/>");
        i++;
        return;
      }
      if (n == true) {
        str = "click here for more information";
        str1 = str.link(cont);
        console.log("in true block");
        temp1 = "";
      }

      else {
        if (prompt == true) {
          var res = cont.split(" ");

          var itemp;
          pid = 0;
          for (itemp = 1; itemp < res.length; itemp++) {
            var innerDiv = document.createElement('span');
            innerDiv.id = pid;
            innerDiv.innerHTML = ("&nbsp;<input type='button' id='btn" + pid + "' class='btn btn-primary' style='height:40px;width:auto;text-align:center;font-weight:20px;font-size: 12px;font-family: cursive;font-weight: bolder;color: white;background-color: seagreen;border-color: blueviolet;' value='" + res[itemp] + "' onclick='func(\"" + res[itemp] + "\",\"" + res.length + "\")'>&nbsp;&nbsp;&nbsp;&nbsp;");
            pid++;
            $("#spokenResponse").addClass("is-active").find(".spoken-response__text").append(innerDiv);
            flag = true;
          }
        }
        else {
          temp1 = cont;
          console.log("in else block");
          str1 = "";
        }
      }
      //------------------------------------------------nested ajax code------------------------------
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
          if (flag == true) {
            return;
          }


          cont1 = data.result.speech;
          console.log("second response data: " + cont1)
          m = cont1.includes("http://");
          console.log("second response " + n);

          if (m == true) {
            str = "click here for more information";
            str1 = str.link(cont1);
            console.log("in true block");
          }
          else {
            temp1 = cont1;
            console.log("in else block");
            if (n == m) {
              str1 = "";
            }

          }
          var innerDiv = document.createElement('div');
          innerDiv.id = i;
          innerDiv.innerHTML = ("&nbsp; &nbsp; &nbsp;" + temp1 + " " + str1 + "&nbsp; &nbsp; &nbsp;<br/>");
          i++;
          $("#spokenResponse").addClass("is-active").find(".spoken-response__text").append(innerDiv);
          $("#spokenResponse").addClass("is-active").find(".spoken-response__text").append("<br/><br/><br/><br/><br/><br/>");

          innerDiv.className = "speechanswer";

          var innerDiv1 = document.createElement('div');
          innerDiv1.id = i;
          var currentTime = new Date();
          var hour = currentTime.getHours();
          var min = currentTime.getMinutes();
          var sec = currentTime.getSeconds();
          innerDiv1.innerHTML = ("&nbsp; &nbsp;" + hour + " hrs : " + min + " mins : " + sec + " secs &nbsp; &nbsp; &nbsp;");
          $("#spokenResponse").addClass("is-active").find(".spoken-response__text").append(innerDiv1);
          innerDiv1.className = "timinganswer";
          $("#spokenResponse").addClass("is-active").find(".spoken-response__text").append("<br/><br/><br/><br/><br/>");
          i++;

        },
        error: function () {
          respond(messageInternalError);
        }
      })

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

}

function funcpassword(it) {
  console.log("value of it " + it)
  var textboxvalue = document.getElementById('pass' + it);
  console.log("textboxvalue " + textboxvalue.value);


  console.log("i am in funcpassword block ");
  selected_value = textboxvalue.value;
  console.log("value in text box is " + selected_value)
  flag = true;
  send();
  $("#pass" + it).remove();
  $("#pass1" + it).remove();


}
function func(clickedvalue, reslength) {

  console.log("clicked pid : " + clickedvalue);
  console.log("reslength : " + reslength);
  selected_value = clickedvalue;
  send();
  deletebutton(reslength);
}


function deletebutton(length) {
  for (i = 0; i < length ; i++) {
    $("#btn" + i).remove();
  }
  pid = 0;
}

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
    $recBtn.text(recognition ? "Stop" : "Speak"); s
}

//=====================================================================================send()================================================================================
function send() {

   // var div = document.getElementById('spokenResponse');
 //   $(".spoken-response__text").animate({ scrollTop: $(".spoken-response__text")[0].scrollHeight}, 1000);
    $('.spoken-response__text').animate({
        scrollTop: $('.spoken-response__text')[0].scrollHeight
    }, 2000);
    var text = "";
    str1 = "";
    if (flag == true) {
        text = selected_value;
        console.log("selected value :" + selected_value);

    }
    else {
        text = $speechInput.val();
        $("#speech").val('');
    }
    var innerDiv = document.createElement('li');

    //innerDiv.style = "float:right;background-color:blue;color:green;"
    // innerDiv.style = "background-color:blue;"
    //innerDiv.style = "color:green;"

    innerDiv.innerHTML = (" <div class='avatar user-avatar'><img src='img/profile.png'> </div><div class='text_wrapper'>" + "<div class='text'>" + "&nbsp; &nbsp; &nbsp;" + text + "&nbsp; &nbsp; &nbsp;" + "</div>" + "</div>");
    innerDiv.className = "speech message left appeared";
    innerDiv.id = i;

    //$("#"+i).css("float","right");
    i++;
    //$("#"+i).style[float] = 'right';
    $("#spokenResponse").addClass("is-active").find(".spoken-response__text").append(innerDiv);
   // $("#spokenResponse").addClass("is-active").find(".spoken-response__text").append("<br/><br/>");
    var innerDiv1 = document.createElement('div');

    var currentTime = new Date();
    var hour = currentTime.getHours();
    var min = currentTime.getMinutes();
    var sec = currentTime.getSeconds();
    //var sent_at = jQuery.timeago(currentTime);
    //innerDiv1.innerHTML = ("&nbsp; &nbsp;" +  sent_at + " &nbsp; &nbsp; &nbsp;");
    innerDiv1.innerHTML = ("&nbsp; &nbsp;" + hour + " hrs : " + min + " mins : "+sec+" sec&nbsp; &nbsp; &nbsp;");
    $("#spokenResponse").addClass("is-active").find(".spoken-response__text").append(innerDiv1);
    innerDiv1.className = "timing";
   // $("#spokenResponse").addClass("is-active").find(".spoken-response__text").append("<br/><br/><br/><br/>");


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
            var images = cont.includes("images");
            console.log("first response data: " + cont)
            console.log("first response " + n);
            flag = false;

            if (images == true) {
                console.log("i am in images block");
                var res = cont.split(" ");
                var img = document.createElement('img');
                console.log("res 1 the value of url " + res[1]);
                img.src = res[1];
                img.style.width = 200;
                img.style.height = 250;
                img.className = 'reply-image'
                var innerDiv = document.createElement('li');
                //innerDiv.innerHTML = (" <div class='avatar'></div><div class='text_wrapper'>" + "<div class='text'>");
                //innerDiv.innerHTML = document.write(img);
                $("#spokenResponse").addClass("is-active").find(".spoken-response__text").append("<li class='speechanswer message right appeared'> <div class='avatar chatbot'><img src='img/atmecs-logo.png'></div><div class='text_wrapper'>" + "<div class='text'>");
                $("#spokenResponse").addClass("is-active").find(".spoken-response__text").find(".text").last().append(img);
                $("#spokenResponse").addClass("is-active").find(".spoken-response__text").append("</div></div></li>");
              //  $("#spokenResponse").addClass("is-active").find(".spoken-response__text").append("<br/><br/>");
              //  innerDiv.innerHTML = ("</div></div>");
                innerDiv.className = "speechanswer message right appeared";
                var innerDiv1 = document.createElement('div');

                var currentTime = new Date();
               var hour = currentTime.getHours();
                var min = currentTime.getMinutes();
                //var sent_at = jQuery.timeago(currentTime);
                 var sec = currentTime.getSeconds();
                 innerDiv1.innerHTML = ("&nbsp; &nbsp;" + hour + " hrs : " + min + " mins : " + sec + " secs&nbsp; &nbsp; &nbsp;");
                //innerDiv1.innerHTML = ("&nbsp; &nbsp;" + sent_at + " &nbsp; &nbsp; &nbsp;");
                $("#spokenResponse").addClass("is-active").find(".spoken-response__text").append(innerDiv1);
                innerDiv1.className = "timinganswer";
                //$("#spokenResponse").addClass("is-active").find(".spoken-response__text").append("<br/><br/><br/><br/><br/>");

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

                    var i;
                    pid = 0;
                    for (i = 1; i < res.length; i++) {
                        var innerDiv = document.createElement('span');
                        innerDiv.id = pid;
                        innerDiv.innerHTML = ("&nbsp;<input type='button' id='btn" + pid + "' class='btn btn-primary' style='height:40px;width:100px;text-align:center;font-weight:20px;font-size: 12px;font-family: cursive;font-weight: bolder;color: white;background-color: seagreen;border-color: blueviolet;' value='" + res[i] + "' onclick='func(\"" + res[i] + "\",\"" + res.length + "\")'>&nbsp;&nbsp;&nbsp;&nbsp;<br/><br/>");
                        //innerDiv.innerHTML = (temp1+" "+str);
                        pid++;
                        // innerDiv.className = "promptbutton";
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

                    if (i >= 12) {

                        $("#" + j).remove();
                        j++;
                        $("#" + j).remove();
                        j++;

                    }
                    var innerDiv = document.createElement('div');
                    innerDiv.id = i;
                    innerDiv.innerHTML = (" <div class='avatar chatbot'><img src='img/atmecs-logo.png'></div><div class='text_wrapper'>" + "<div class='text'>" +"&nbsp;" + temp1 + " " + str1 + "&nbsp; &nbsp; &nbsp;<br/>" + "</div>" + "</div>");
                    //innerDiv.innerHTML = (temp1+" "+str);
                    i++;
                    $("#spokenResponse").addClass("is-active").find(".spoken-response__text").append(innerDiv);
                   // $("#spokenResponse").addClass("is-active").find(".spoken-response__text").append("<br/><br/>");

                    innerDiv.className = "speechanswer message right appeared";

                    var innerDiv1 = document.createElement('div');

                    var currentTime = new Date();
                    var hour = currentTime.getHours();
                   var min = currentTime.getMinutes();
                  //  var sent_at = jQuery.timeago(currentTime);
                     var sec = currentTime.getSeconds();
                    //innerDiv1.innerHTML = ("&nbsp; &nbsp;" + sent_at + "    &nbsp; &nbsp; &nbsp;");
                      innerDiv1.innerHTML = ("&nbsp; &nbsp;" + hour + " hrs : " + min + " mins : "+sec+" sec&nbsp; &nbsp; &nbsp;");
                    $("#spokenResponse").addClass("is-active").find(".spoken-response__text").append(innerDiv1);
                    innerDiv1.className = "timinganswer";
                  //  $("#spokenResponse").addClass("is-active").find(".spoken-response__text").append("<br/><br/><br/><br/><br/>");


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
    //my added code


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
        //msg.text = <a href="' + val + '">val</a>;
        msg.text = val;
        msg.lang = "en-US";
        window.speechSynthesis.speak(msg);
    }

}
function func(clickedvalue, reslength) {

    console.log("clicked pid : " + clickedvalue);
    console.log("reslength : " + reslength);
    //window.alert(clickedpid);
    // console.log("clickedpid value "+clickedpid);
    // selected_value=document.getElementById("1").value;
    selected_value = clickedvalue;

    // for (i = 0; i < reslength-1; i++) {
    //   $("#" + i).remove();
    // }
    // pid=0;

    // var rece=$(this).attr('value');
    // window.alert(rece);

    // console.log("in function selected value :"+selected_value);
    send();
    deletebutton(reslength);
}


function deletebutton(length) {
    for (i = 0; i < length - 1; i++) {
        $("#btn" + i).remove();
    }
    pid = 0;
}


(function () {
    var Message;
    Message = function (arg) {
        this.text = arg.text, this.message_side = arg.message_side;
        this.draw = function (_this) {
            return function () {
                var $message;
                $message = $($('.message_template').clone().html());
                $message.addClass(_this.message_side).find('.text').html(_this.text);
                $('.messages').append($message);
                return setTimeout(function () {
                    return $message.addClass('appeared');
                }, 0);
            };
        }(this);
        return this;
    };
    $(function () {
        var getMessageText, message_side, sendMessage;
        message_side = 'right';
        getMessageText = function () {
            var $message_input;
            $message_input = $('.message_input');
            return $message_input.val();
        };
        sendMessage = function (text) {
            var $messages, message;
            if (text.trim() === '') {
                return;
            }
            $('.message_input').val('');
            $messages = $('.messages');
            message_side = message_side === 'left' ? 'right' : 'left';
            message = new Message({
                text: text,
                message_side: message_side
            });
            message.draw();
            return $messages.animate({ scrollTop: $messages.prop('scrollHeight') }, 300);
        };
     /*   $('.send_message').click(function (e) {
            return sendMessage(getMessageText());
        });
        $('.message_input').keyup(function (e) {
            if (e.which === 13) {
                return sendMessage(getMessageText());
            }
        });
        sendMessage('Hello Philip! :)');
        setTimeout(function () {
            return sendMessage('Hi Sandy! How are you?');
        }, 1000);*/

    });
}.call(this));
"use strict";

let messageController = require("./appData");

$("#input").keypress((e) => {
    let msgArr = messageController.getMessages();
    let output = require ("./outputToDom");
    const key = e.which || e.keyCode;
    if (key === 13){
        let message = $("#input").val();
        let msgObject = {};
        msgObject.msg = message;
        let arrayWithInput = messageController.addNewMessage(msgObject);
        output.updateDom(arrayWithInput);
        $("#input").val(""); 
        return arrayWithInput; //GET NEW ARRAY ADD
    }
    });



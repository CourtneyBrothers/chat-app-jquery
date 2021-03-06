"use strict";

let messageController = require("./appData");
let output = require ("./outputToDom");

module.exports.getjsonData =() => {
    $.ajax({
        url:"messages.json",
    }).done(
            (data)=>{
                 console.log("json",data);
                parseMsg(data);
            }
        );
};

const parseMsg = (ajaxData) => {
    $(ajaxData.messages).each((index,message)=>{
        let arrayWithJson = messageController.addNewMessage(message);
        console.log("array with json",arrayWithJson); 
         output.updateDom(arrayWithJson);
    });

};


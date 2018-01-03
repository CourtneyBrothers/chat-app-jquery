"use strict";
let outputDiv = $("#output");


module.exports.updateDom = (objectArr) => {
    outputDiv.text("");
    for(let i = 0; i < objectArr.length; i++) {
        outputDiv.append($(`<div id = "${i}"class="parent">${objectArr[i].msg} <button class="delete">Delete</button></div>`));
    }
    if (objectArr.length === 0){
        $("#clear").attr("disabled");
    }   
};



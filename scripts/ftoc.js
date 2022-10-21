"use strict";

window.onload = init;

function init() {
    const calculateBtn = document.getElementById("calculateBtn");
    // setting var.action to function names
    calculateBtn.onclick = calculateBtnOnClick;
}

function calculateBtnOnClick() {
    const fahrenheitField = document.getElementById("fahrenheitField");
  


    let fahrenheitAsNumber = Number(fahrenheitField.value);
   

    let answer = (fahrenheitAsNumber-32) * (5/9);

    const answerField = document.getElementById("answerField");

    answerField.value = answer;

}
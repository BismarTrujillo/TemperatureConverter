"use strict";

window.onload = init;

function init() {
    const calculateBtn = document.getElementById("calculateBtn");
    const number1Field = document.getElementById("celsiusField");
    // setting var.action to function names
    calculateBtn.onclick = calculateBtnOnClick;
}



function calculateBtnOnClick() {
    const celsiusField = document.getElementById("celsiusField");
  


    let celsiusAsNumber = Number(celsiusField.value);
   

    let answer = celsiusAsNumber*(9/5)+32;

    const answerField = document.getElementById("answerField");

    answerField.value = answer;

}
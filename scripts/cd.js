"use strict";

window.onload = init;

function init() {
    const calculateBtn = document.getElementById("calculateBtn");
    // setting var.action to function names
    calculateBtn.onclick = calculateBtnOnClick;
}

function calculateBtnOnClick() {
    const depositField = document.getElementById("depositField");
    const interestField = document.getElementById("interestField");
    const yearsField = document.getElementById("yearsField");


    //variables inputted by user
    let depositAsNumber = Number(depositField.value);
    let interestAsNumber = Number(interestField.value);
    let yearsAsNumber = Number(yearsField.value);
    //variables for clean formula 



    let futureValue = depositAsNumber*(Math.pow((1+((interestAsNumber/100)/365)),(365*yearsAsNumber)));
    let totalInterest = futureValue - depositAsNumber;  
    
    const futureField = document.getElementById("futureField");
    const totalInterestField = document.getElementById("totalInterestField");
    
    futureField.value = Math.round(futureValue*100)/100;
    totalInterestField.value = Math.round(totalInterest*100)/100;

}
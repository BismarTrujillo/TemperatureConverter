"use strict";

window.onload = init;

function init() {
    const calculateBtn = document.getElementById("calculateBtn");
    // setting var.action to function names
    calculateBtn.onclick = calculateBtnOnClick;
}

function calculateBtnOnClick() {
    const loanField = document.getElementById("loanField");
    const interestField = document.getElementById("interestField");
    const yearsField = document.getElementById("yearsField");


    //variables inputted by user
    let loanAsNumber = Number(loanField.value);
    let interestAsNumber = Number(interestField.value);
    let yearsAsNumber = Number(yearsField.value);
    //variables for clean formula 
    let interestMontlyPercent = interestAsNumber * (100 / 12);
    let yearsInMoths = yearsAsNumber * 12;
    //Mortgage formula --> M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1].
    let moPayment = loanAsNumber(interestMontlyPercent * (1 + interestMontlyPercent) ^ (yearsInMoths)) / ((1 + interestMontlyPercent) ^ (yearsInMoths) - 1);

    const mopaymentField = document.getElementById("mopaymentField");

    mopaymentField.value = moPayment;

}
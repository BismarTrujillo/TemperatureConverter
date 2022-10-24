"use strict";

window.onload = init;

function init() {
    const calculateBtn = document.getElementById("calculateBtn");
    // setting var.action to function names
    calculateBtn.onclick = calculateBtnOnClick;
}

function calculateBtnOnClick() {
    const montlyPayoutField = document.getElementById("montlyPayoutField");
    const interestField = document.getElementById("interestField");
    const yearsField = document.getElementById("yearsField");


    //variables inputted by user
    let montlyPayoutAsNumber = Number(montlyPayoutField.value);
    let interestAsNumber = Number(interestField.value);
    let yearsAsNumber = Number(yearsField.value);
   
    let numOfPeriods = yearsAsNumber * 12;
    let periodInterest = interestAsNumber / 100 /12;
 //Present Value = PMT x ((1 - (1 + r) ^ -n ) / r)  
    
    let pva = montlyPayoutAsNumber*((1-Math.pow((1+periodInterest),-numOfPeriods))/periodInterest);
    
    const pvaField = document.getElementById("pvaField");
    
    pvaField.value = Math.round(pva*100)/100;
    

}
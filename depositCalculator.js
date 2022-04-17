function depositCalculator(input){

let deposidSume = Number(input[0]);
let timeDeposid = Number(input[1]);
let yearProcent = Number(input[2]);


 let procent = deposidSume * yearProcent / 100;

let procentPerMonth = procent / 12;

let totalSum  = deposidSume + timeDeposid * procentPerMonth;
console.log(totalSum);
}
depositCalculator(["200 ",
"3",
"5.7 "])
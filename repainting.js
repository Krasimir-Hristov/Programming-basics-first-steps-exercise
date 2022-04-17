function repainting(input){
let protecPlastic = Number(input[0]);
let paint = Number(input[1]);
let paintliquid = Number(input[2]);
let wokerHours = Number(input[3]);

let extraPaint = paint * 0.10;
let protecPlasticPrice = (protecPlastic + 2) * 1.50;
let paintPrice = (paint + extraPaint) * 14.50;
let paintliquidPrice = paintliquid * 5;
let sumOfMaterials = protecPlasticPrice + paintliquidPrice + paintPrice + 0.40;

let workersMoney = (sumOfMaterials * 0.30) * wokerHours;

let total = workersMoney + sumOfMaterials;
console.log(total);
}
repainting(["10 ",
"11 ",
"4 ",
"8 "])
function foodDelivery(input){

    let chikenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegetarishMenu = Number(input[2]);

    let chikenMenuPrice = chikenMenu * 10.35;
    let fishMenuPrice = fishMenu * 12.40;
    let vegetarishMenuPrice = vegetarishMenu * 8.15;
    let deserte = ( chikenMenuPrice + fishMenuPrice + vegetarishMenuPrice) * 0.20;
    let delivery = 2.50;



    let sum = chikenMenuPrice + fishMenuPrice + vegetarishMenuPrice + deserte + delivery;
console.log(sum);
}
foodDelivery(["2 ",
"4 ",
"3 "])
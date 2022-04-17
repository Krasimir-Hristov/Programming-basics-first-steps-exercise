function basketballEquipment(input){
 
    let yearTax = Number(input[0]);

    let snickers = yearTax * 0.60;
    let shirt = snickers * 0.80
    let ball = shirt / 4; 
    let accsesories = ball / 5;
    let total = snickers + shirt + ball + accsesories + yearTax;

 console.log(total);
}
basketballEquipment(["365 "])
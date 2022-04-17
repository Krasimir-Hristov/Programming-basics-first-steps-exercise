function suppliesForSchool(input){


    let pakegPancel = Number(input[0]);
    let markers = Number(input[1]);
    let clearner = Number(input[2]);
    let discount = Number(input[3]);


    let pencelPrice = pakegPancel * 5.80;
    let markesPrice = markers * 7.20;
    let clearnerPrice = clearner * 1.20;
    let totalSum = pencelPrice + markesPrice + clearnerPrice;
    let discountPercent = discount / 100;

    let totalPrice = totalSum - (totalSum * discountPercent)
    
    console.log(totalPrice);


}
suppliesForSchool(["2 ",
"3 ",
"4 ",
"25 "])
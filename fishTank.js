function fishTank(input){

   let length = Number(input[0]);
   let bride = Number(input[1]);
   let hight = Number(input[2]);
   let procent = Number(input[3])


   let cmToDm = length * bride * hight;
   let liters = cmToDm / 1000;
   let freeLiters = liters * procent / 100;
   let result = liters - freeLiters



   console.log(result);


}
fishTank(["85 ",
"75 ",
"47 ",
"17 "])
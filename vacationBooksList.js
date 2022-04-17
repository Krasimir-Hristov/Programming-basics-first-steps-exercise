function vacationBooksList(input){

let pages = Number(input[0]);
let pagesReadetPerHour = Number(input[1]);
let dayCount = Number(input[2]);

let hoursNeedet = pages / pagesReadetPerHour;

let hoursPerDay = hoursNeedet / dayCount;
console.log(hoursPerDay);

}
vacationBooksList(["212 ",
"20 ",
"2 "])
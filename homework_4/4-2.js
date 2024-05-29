//Diana Romanova
//Assignment 4.2

let x = prompt("Enter a 3 digit number");
let y = x.split("");

if (y[0] == y[1] && y[1] ==y[2]){
    console.log("All digits are the same")
}else if( y[0] == y[1] || y[1] == y[2] || y[0] == y[2] ){
    console.log("There are same digits in this number")
}
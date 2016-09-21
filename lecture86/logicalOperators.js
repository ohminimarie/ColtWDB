// assuming x=5 and y=9
// && AND (requires both sides to be true)
x < 10 && x !== 5 //false

// || OR (requires one side to be true)
x > 9 || x === 5 //true

// ! NOT (requires to be false)
!(x===y)  //true

// Exercise 1

var x = 10;
var y = "a"

y === "b" || x >= 10 //true

// Exercise 2

var x = 3;
var y = 8;

!(x == "3" || x === y) && !(y != 8 && x <= y) //false

!"Hello World" //false
!"" //false
!!"hello" //true
!!"" //false
!!null //false
!!0 //false
!!NaN //false
!!-1 //true


//Falsy Values
// false
// 0
// ""
// null
// undefined
// NaN
// Everything else is truthy

//

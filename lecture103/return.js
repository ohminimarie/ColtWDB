// Will only print 16 in developer's console
// "4 squared is: " + square(4)
// will print 16 and return "4 squared is: undefined"

function square(x) {
  console.log(x * x);
}
square(4);

//Will return the square 16
//console.log returns undefined
function square(x) {
  return x * x;
}
square(4);

//this function capitalizes the first char in a string
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = "paris"; //"paris"
var capital = capitalize(city); //"Paris"

//we can capture the retuned value in a variable as exemplified in the var capital
//The return keyword stops execution of a function
function capitalize(str) {
  if(typeof str === "number") {
    return "that's not a string!";
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = "paris";
var capital = capitalize(city);

var num = 37
var capital = capitalize(num);

//function declaration
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

//function expression
var capitalize = function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
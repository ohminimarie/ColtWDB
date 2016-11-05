//Intro to JS Scope
//Scope is the context that code is executed in

function doMath(){
  var x = 40;
  console.log(x);
}

doMath(); //returns 40

x; //Returns x is not defined

var x = "hello!";
// x in global schope returns "hello!"

// doMath() will still return 40

var y = 99;
y; //returns 99

function doMoreMath(){
  console.log(y);
}

doMoreMath(); //returns 99

//can define a variable outside a function and use it in a function
//opposite is not true
var y = 99;
function doMoreMath(){
  y = 100;
  console.log(y);
}
y; // returns 99
doMoreMath() //returns 100
y; // returns 100
//changed y in the function bc of not using var to declare scope

var phrase = "hi there!"
function doSomething() {
  var phrase = "Goodbye!";
  console.log(phrase);
}

doSomething(); // Goodbye!
phrase; //"hi there!"
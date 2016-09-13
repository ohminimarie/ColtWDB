alert("Hello everyone!");

// Bring up js console via command + option + j (keyboard shortcut)

 // Numbers
 4
 9.3
 -10

// Can do math
4 + 10      //14
1/5         //0.2

//Modulo - remainder operator
10 % 3      //1
24 % 2      //0
15 % 11     //4

//Strings
"Hello World"
"43"

//Single or double quotes
"Hello World"
'Hello World'

//Concatenation
"charlie" + "brown"   //"charliebrown"

//Escape Characters start with "\"
"Singing \"Do wah diddy, diddy, dum diddy do\" "
"This is a backslash: \\"

//Strings have a length property
"hello world".length    //11

//Access individual characters using [] and an index
"hello"[0]  //"h"
"hello"[4]  //"o"

//Booleans
true
false

//null and undefined
undefined
null

//Primitives Exercises
//1.
100 % 3
// 100/3 = 33.3 
// 33.3 * 3 = 99
// 100 - 99 = 1
// Modulo = 1

//2.
("blah" + "blah")[6]
// "blah" + "blah" = "blahblah"
// "blahblah"[6] = "a"

//3.
"hello".length % "hi\\".length
// "hello".length = 5
// "hi\\".length = 3
// 5 % 3 = 5/3 = 1.67
// 3 * 1.67 = 2
// Modulo is 2

//Variables are simply containers that store values
//They follow this pattern:
var yourVariableName = yourValue;

//They can store all of the values we've seen
var name = "Rusty";
var secretNumber = 73;
var isAdorable = true;

//Recall the store value by calling the variable name
var name = "Rusty";
"hello there " + name     //"hello there Rusty"

var num = 37;
num + 3 + 10      //50

//We can also update existing variables
var name = "Robert";
name = "Bob";

//The two other primitives are null and undefined

//variables that are declared bu not
//initialized are undefined
//The following variables are undefined:
var name;
var age;

//null is "explicitly nothing"
var currentPlayer = "charlie";
currentPlayer = null  //game over

//js built in methods
//alert, prompt, console.log
clear() //clearing console
alert("Hello There!!");
console.log("Hello from the console!");
prompt("what is your name?");

var userName = prompt("What is your name?");


//Intro & Global
//What is 'this'?
//Reserved keyword in JS
//Usually determined by how a function is called
//(what we call 'execution context')
//Can be determined using four rules 
//(global, object/implicit, explicit, new)


// 1 - Global Context
// When "this" is not inside of a declared object

console.log(this) //window

function whatIsThis (){
  return this;
};

function variablesInThis() {
  //since the value of this is the window
  //all wea re doing her is creating a global variable
  this.person = "Elie";
}

console.log(person) // Elie

whatIsThis() // window

var person = "Elie"

window.person // Elie

window.person === person //true


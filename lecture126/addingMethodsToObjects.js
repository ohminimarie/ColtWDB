//JS METHODS
//Topics:
//Adding methods to an object
//Namespacing
//The keyword this

var obj = {
  name: "Chuck";
  age: 45,
  isCool: false,
  friends: ["Bob", "Tina"],
  add: function(x, y){
    return x + y;
  }
}

obj.add(10, 5)  //15

//want a method for dogs
function speak() {
  return "WOOF!";
}

//want a method for cats
function speak() {
  return "MEOW!";
}

//name collision, rewrote over previous function bc it wasn't in a specific scope
//to remedy problem:
var dogSpace = {};
dogSpace.speak = function(){
  return "WOOF!";
}

var catSpace = {};
catSpace.speak = function(){
  return "MEOW!";
}

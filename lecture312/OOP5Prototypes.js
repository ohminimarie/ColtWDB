//Prototypes

//Review: The 'new' keyword
//Creates and object out of thin air

//Assigns the value of 'this' to be that object

//Adds 'return this' to the end of the function 

//Creates a link (which we can access as __proto__) between the object
//created and the prototype property of the constructor function

//Every constructor function has a property on it called "prototype",
//which is an object

//The protototype object has a property on it called "constructor",
//which points back to the constructor function

//Anytime an object is created using the 'new' keyword, a property
//called "__proto__" gets created, linking the object and the prototype
//property of the constructor function

//this is a constructor function
function Person(name){
  this.name = name;
}

//this is an object created from the Person constructor
var elie = new Person("Elie");
var colt = new Person("Colt");

//since we used the new keyword, we have established
//a link between the object and the prototype property
//we can access that using __proto__

elie.__proto__ === Person.prototype;  //true
colt.__proto__ === Person.prototype;  //true

//The Person.prototype object also has a property
//called constructor which points back to the function

Person.prototype.constructor === Person;   //true

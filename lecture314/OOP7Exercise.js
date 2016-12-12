//Refactoring
//Now that we know that objects created by the same constructor
//have a shared prototype, let's refactor some code

function Person(name){
  this.name = name;
  this.sayHi = function(){
    return "Hi " + this.name;
  }
}

elie = new Person("Elie");
elie.sayHi(); //Hi Elie

//Now this code works, but it is inefficient
//Every time we make an object using the new keyword we have to
//redefine this function but its the same for everyone! Let's put
//it on the prototype instead!

funtion Person(name){
  this.name = name;
}

Person.prototype.sayHi = function(){
  return "Hi " + this.name;
}

elie = new Person("Elie");
elie.sayHi(); //Hi Elie

//Your turn!

//Create a constructor function for a Vehicle: every object created
//from this constructor should have a make, model, and year property.
//Each object should also have a property called isRunning, which
//should be set to false

function Vehicle(make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;
  this.isRunning = false;
}

//Every object created from the Vehicle constructor should have a
//function called turnOn, which changes the isRunning property to true

//Every object created from the Vehicle constructor should have a
//function called turnOff, which changes the isRunning property to false

//Every object created from the Vehicle constructor should have a method
//called honk, which returns the string "beep" ONLY if the isRunning
//property is true

Vehicle.prototype.turnOn = function(){
  this.isRunning = true;
}

Vehicle.prototype.turnOff = function(){
  this.isRunning = false;
}

Vehicle.prototype.honk = function(){
  if(this.isRunning){
    return "beep";
  }
}


// RECAP

// Every time the new keyword is used, a link between the object
// created and the prototype property of the constructor is
// established - this link can be accessed using __proto__

// The prototype object contains a property called constructor,
// which points back to the constructor function

// To share properties and methods for objects created by a 
// constructor function, place them in the prototype as it is 
// the most efficient

//Implicit/Object
//When the keyword "this" is inside of a declared object

//strict mode does NOT make a difference here

var person = {
  firstName: "Elie",
  sayHi: function(){
    return "Hi " + this.firstname;
  },
  determineContext: function(){
    return this === person;
  }
}

person.SayHi() //"Hi Elie"

person.determineContext() //true

//Nested Objects
//What ahppens when we have a nested object?


var person = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi " + this.firstName;
  },
  determineContext: function(){
    return this === pereson;
  },
  dog: {
    sayHello: function() {
      return "Hello " + this.firstName;
    },
    determineContext: function(){
      return this === person;
    }
  }
}

person.sayHi(); //"Hi Colt"
person.determineContext() //true

//but waht is the value of the keyword 'this' right now?
person.dog.sayHello(); //"Hello undefined"
person.dog.determineContext();  //false

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


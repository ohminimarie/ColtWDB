//Fixing up with call

var person = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi " + this.firstName;
  },
  determineContext: function(){
    return this === person;
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

person.dog.sayHello.call(person); //"Hello Colt"
person.dog.determineContext.call(person);  //true

//using call worked! Notice that we do NOT invoke
//sayHello or determineContext

//Using Call in the wild
//Let's examine a very common use case

var colt = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi " + this.firstName;
  },
}

var elie = {
  firstName: "Elie",
  //look at all this duplication :(
  sayHi: function(){
    return "Hi " + this.firstName;
  },
}

colt.sayHi()  //"Hi Colt"
elie.sayHi()  //"Hi Elie" (but we had to copy and past the function from
              // from above)

//How can we refactor the duplication using call?
var colt = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi " + this.firstName;
  },
}

var elie = {
  firstName: "Elie",
}

colt.sayHi(); //"Hi Colt"
colt.sayHi.call(elie);  //"Hi Elie"

//How can we "borrow" the sayHi function from colt
//and set the value of 'this' to be elie?


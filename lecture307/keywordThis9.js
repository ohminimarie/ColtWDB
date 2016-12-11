//The 'new' keyword
//We can set the context of the keyword 'this' using the 'new' keyword 
//- it does quite a bit more as well which we will discuss further when
//we talk about OOP

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

var elie = new Person("Elie", "Schoppik");
elie.firstName  //"Elie"
elie.lastName   //"Schoppik"

//RECAP
// The keyword "this" is a reserved keyword in Javascript and its
// value is determined at execution

// It is either set using the global context, object binding, explicit
// binding, or the 'new' keyword

// When set in the global context in a function, it is either the 
// global object (window if int he browser) or undefined (if we are
// using strict mode)

// To explicitly set the value of the keyword 'this', we use call, 
// apply, or bind

// We can also use the 'new' keyword to set the context of 'this', which
// we will discuss when we talk about OOP

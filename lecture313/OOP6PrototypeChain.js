//Prototype

//Where does the prototype property fit into all of this? 
//Remember, the prototype is shared among all objects created by
//that constructor function

function Person(name){
  this.name = name;
}

//this is an object created from the Person constructor

var elie = new Person("Elie");
var colt = new Person("Colt");

Person.prototype.isInstructor = true;

elie.isInstructor;  //true
colt.isInstructor;  //true

//how were we able to access properties on the prototype??
//__proto__!


//OOP Defined
//A programming model based around the idea of objects

//These objects are constructed form what are called "classes", which
//we can think of like a blueprint. We call these objects created from
//classes "instances"

//We strive to make our classes abstract and modular

//OOP In Javascript
//But JS doesn't have "classes" built into it - so what do we do?
//We use functions and objects!

//Constructor Functions
//Let's use a function as a blueprint for what each house should be =
//We call these kinds of functions "constructor" functions

function House(bedrooms, bathrooms, numSqft){
  this.bedrooms = bedrooms;
  this.bathrooms = bathrooms;
  this.numSqft = numSqft;
}

//Capitalization of the function name - this is convention!
//The keyword 'this' is back!
//We are attaching properties onto the keyword 'this'. We would like
//the keyword 'this' to refer to the object we will create from our
//constructor function, how might we do that?

//Creating an object
//How do we use our constructor to actually construct objects?

var firstHouse = House(2, 2, 1000) //does this work?
firstHouse  //undefined ... guess not!

//Why is this not working??
//We are not returning anything from the function so our House function
//returns undefined

//We are not explicitly binding the keyword 'this' or placing it inside
//a declared object. This means the value of the keyword 'this' will be
//the global object, which is not what we want!



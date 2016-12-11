//The 'new' keyword
//Our solution to the problem

function House(bedrooms, bathrooms, numSqft){
  this.bedrooms = bedrooms;
  this.bathrooms = bathrooms;
  this.numSqft = numSqft;
}

var firstHouse = new House(2, 2, 1000) 
firstHouse.bedrooms   //2
firstHouse.bathrooms  //2
firstHouse.numSqft    //1000

//So what does the 'new' keyword do? A lot more than we might think...
//It first creates an empty object

//Then sets the keyword 'this' to be that empty object

//It adds the line 'return this' to the end of the function, which 
//follows it

//It adds a property onto the empty object called "__proto__", which
//links the prototype property on the constructor function to the
//empty object (more on this later) (dunderproto property)

//Create a constructor function for a Dog - each dog should have a 
//name and an age. As a bonus, add a function for each dog called 
//'bark', which console.log's the name of the dog added to the string
//'just barked!'

//Your constructor function goes here

function Dog(name, age){
  this.name = name;
  this.age = age;
  this.bark = function(){
    console.log(this.name + " just barked!");
  };
} 

//this code should work if ou have implemented it correctly

var rusty = new Dog('Rusty', 3);
var fido = new Dog('Fido', 1);

rusty.bark()  //Rusty just barked!
fido.bark()   //Fido just barked!

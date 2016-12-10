//Wanted to model a single person: name, age, city
//I could use an array like this:
var person = ["Cindy", 32, "Missoula"];

//to retrieve the person's hometown:
person[2] //this is not very meaningful code

//what if I accidentally reversed the order?

var person2 = ["Travis", "Los Angeles", 21];

//PERFECT USE CASE FOR AN OBJECT
var person = {
  name: "Cindy",
  age: 32,
  city: "Missoula"
};

//Objects store data in key-value pairs
//Note: unlike arrays, objects have no order.

var person = {
  name: "Travis";
  age: 21,
  city: "LA";
};

//bracket notation, similar to arrays:
console.log(person["name"]);
//dot notation:
console.log(person.name);

var dog = {
  name: "Rusty",
  breed: "Mutt",
  age: 3
}

dog               // Object {name: "Rusty", breed: "Mutt", age: 3}
dog["age"]        // 3
dog.age           // 3

//RETRIEVING DATA
//There are a few differences between the 2 notations
//you cannot use dot notation if the property starts with a number

someObject.1blah    //INVALID
someObject["1blah"] //VALID!

//you can lookup using a variable with bracket notation
var str = "name";
someObject.str  //doesn't look for "name"
someObject[str] // does evaluate str and looks for "name"

//you cannot use dot notation for property names with spaces
someObject.fav color    //INVALID
someObject["fav color"] //VALID


//UPDATING DATA
//Just like an array: access a property and reassign it
//to update age
person["age"] +=1;
//to update city
person.city = "London"

dog.age = 4;  // 4
dog.age += 1; // 5
dog["name"] = "Tater";  // "Tater"


//Creating Objects
//Like arrays, there are a few methods of initializing objects
//make an empty object and then add to it
var person = {};
person.name = "Travis";
person.age = 21;
person.city = "LA";

//all at once
var person = {
  name: "Travis";
  age: 21,
  city: "LA";
};

//another way of initializing an Object
var person = new Object();
person.name = "Travis";
person.age = 21;
person.city = "LA";

//Objects can hold all sorts of data

var junkObject = {
  age: 57,
  color: "purple",
  isHungry: true,
  friends: ["Horatio", "Hamlet"],
  pet: {
    name: "Rusty",
    species: "Dog",
    age: 2
  }
};













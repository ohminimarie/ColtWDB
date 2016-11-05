//Not dry
var friend1 = "Charlie";
var friend2 = "Liz";
var friend3 = "David";
var friend4 = "Mattias";

//arrays let us group data together in lists
//array are indexed starting at 0. Every slot has a corresponding #
var friends = ["Charlie", "Liz", "David", "Mattias"]
console.log(friends[0]) //"Charlie"

friends[1] + " <3 " + friends[2] //"Liz <3 David"

//We can also update arrays
var friends = ["Charlie", "Liz", "David", "Mattias"]
friends[0] = "Chuck";
friends[1] = "Lizzie";

//We can add new data
var friends = ["Charlie", "Liz", "David", "Mattias"]
friends[4] = "Amelie";


var colors = ["red", "orange", "yellow"];
colors[1]; //"orange"
colors[3] = "green"; //colors = ["red", "orange", "yellow", "green"]
colors[3] = "dark green"; //updates green to dark green


//we can initialize an empty array two ways:
var friends = []; 
var friends = new Array() //uncommon

//Arrays can hold any type of data
var random_collection = [49, true, "Hermione", null];

//Arrays have a length property
var nums = [45, 37, 89, 24];
nums.length //4

var dogs = ["Rusty", "Wyatt", "Olly"];
dogs.length //3
dogs[2]; //"Olly"


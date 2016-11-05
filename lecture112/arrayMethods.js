// use push to add to the end of an array
// returns the length of the array
var colors = ["red", "orange", "yellow"];
colors.push("green");
//["red", "orange", "yellow", "green"]

//use pop to remove the last item in an array
var colors = ["red", "orange", "yellow"];
colors.pop();
//["red", "orange"]

//pop() returns the removed element
var col = colors.pop(); //orange

//use unshift to add to the front of an array
var colors = ["red", "orange", "yellow"];
colors.unshift("infrared");
//["infrared", "red", "orange", "yellow"];]

//use shift to remove the first item in an array
var colors = ["red", "orange", "yellow"];
colors.shift();

//shift() returns the removed element
var col = colors.shift(); //orange

var nums = [34, 54, 22];
nums.unshift("HELLO");
//4
nums // ["HELLO", 34, 54, 22]

nums.shift(); //"HELLO"
nums //[34, 54, 22]

//use indexOf() to find the index of an item in an array
var friends = ["Charlie", "Liz", "David", "Mattias", "Liz"]

//returns the first index at which a given element can be found
friends.indexOf("David"); //2
friends.indexOf("Liz"); // 1, not 4

//returns -1 if the element is not present
friends.indexOf("Hagrid"); //-1

var colors = ["red", "orange", "yellow"];
colors.indexOf("yellow"); //2
colors[2];

colors.indexOf("green") //-1, not present in array

//use slice() to copy parts of an array
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"]
//use slice to copy the 2nd and 3rd fruits
//specify index where the new array starts(1) and ends(3)
//not inclusive
var citrus = fruits.slice(1,3);

//this does not alter the original fruits array
//citrus contains ["Orange", "Lemon"]
//fruits contains ["Banana", "Orange", "Lemon", "Apple", "Mango"]

var nums = [1, 2, 3, "a", "b", 445, 34];
nums //[1, 2, 3, "a", "b", 445, 34];
var letters = nums.slice(3,5);
letters //["a", "b"]

//you can also use slice90 to copy an entire array
var nums = [1, 2, 3];
var otherNums = nums.slice();
//both arrays are [1, 2, 3]

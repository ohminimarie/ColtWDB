//ForEach
//
// JS provides an easy built in way of iterating over an array: ForEach

arr.forEach(someFunction)

var colors = ["red", "orange", "yellow", "green"];

colors.forEach(function(color){
  //color is a placeholder, call it whatever you want
  console.log(color);
});


function myForEach(arr, func) {
  //loop through array
  for(var i = 0; i < arr.length; i++) {
    //call func for each item in array
    func();
  }
}

myForEach(colors, alert);
//alerts for each element in colors array

function myForEach(arr, func) {
  //loop through array
  for(var i = 0; i < arr.length; i++) {
    //call func for each item in array
    func(arr[i]);
  }
}

myForEach(colors, alert);
//alerts for each element in colors array, says color in alert


myForEach(colors, function(color){
  console.log(color);
});


Array.prototype.myForEach = function(func){
  for(var i = 0; i < this.length; i++){
    func(this[i]);
  }

var friends = ["Charlie", "Dave", "Maddy", "Caitlin"];

friends.myForEach(alert)
friends.myForEach(function(name){
  console.log("I love " + name);
})
//To loop over an array using a for loop, we need to
//make use of the array's length property

var colors = ["red", "orange", "yellow", "green"];

for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

//JS built in way of iterating over an array: forEach
arr.forEach(someFunction)

colors.forEach(function(color) {
  //color is a placeholder, call it whatever you want
  console.log(color);
});

colors.forEach(function(iLoveDogs){
  console.log("Inside the foreeach" + iLoveDogs);
});
//Inside the foreach red
//Inside the foreach orange
//Inside the foreach yellow
//Inside the foreach green

function printColor(color){
  console.log("*********");
  console.log(color);
  console.log("*********");
}

colors.forEach(printColor);

//for vs foreach
var colors = ["red", "orange", "yellow", "green"];

for(var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

colors.forEach(function(color){
  console.log(color);
});
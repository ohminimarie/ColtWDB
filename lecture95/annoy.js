var answer = prompt("Are we there yet?");

while (answer !== "yes" && answer !== "yeah" && answer.indexOf("yes") === -1){
  var answer = prompt("Are we there yet?");
}

alert("YAY, WE MADE IT!!!");

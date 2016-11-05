function sing() {
  console.log("twinkle twinkle ..");
  console.log("how i wonder...");
}

setInterval(sing, 1000);

clearInterval(2);

setInterval(function() {
  console.log("I am an anonnymous function!");
  console.log("THIS IS AWESOME!");
}, 2000);

clearInterval(3);
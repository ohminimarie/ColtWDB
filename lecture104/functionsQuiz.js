//returns the value of y - x 

function test(x,y) {
  return y - x;
}

test(10, 40);

//returns 1600 only. first return exits (execution of a function stops) 
// out of expression, so the rest of the code (console.log & return x/2)
// will not be run
function test(x) {
  return x*2;
  console.log(x);
  return x/2;
}

test(40)

//

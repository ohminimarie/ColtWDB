var num = 8;
function doMath() {
  num += 1;
  if(num % 5 == 0) {
    return true
  } else {
    return false
  }
}

num += 1;
doMath()
//returns true


function hi() {
  var name = "Rusty";
  console.log(name);
}

function bye(){
  console.log(name);
}
// returns undefined
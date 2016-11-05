//isEven()
function isEven(x) {
  if (x % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
// function isEven(x) {
// return x % 2 === 0;  
//}

isEven(4); //true
isEven(21); //false
isEven(68); //true
isEven(333); //false

//factorial()
//4! is 4 x 3 x 2 x 1
//6! is 6 x 5 x 4 x 3 x 2 x 1
//0! is 1
function factorial(x) {
  if(x === 0) {
    return 1;
  } else {
    var result = 1;
    for (var i = 1; i <= x; i++) {
      result = result * i;
    }
    return result;
  }
}

factorial(5); //120
factorial(2); //2
factorial(10); //3628800
factorial(0); //1

//function factorial(num){
  //define a result variable
  // var result = 1;
     //calculate factorial and store value in result
  // for(var i = 1; i <= num; i++){
  //   result = result *= i;
  // }
  //return the result variable
    //return result;
// }

// function factorial(num) {
//   if (num === 0) {
//     return 1;
//   }
//   //define a result variable
//   var result = num;
//   //calculate factorial and store value in result
//   for(var i = num - 1; i >= 1; i--){
//     result *= i;
//   }
//   //return the result variable
//   return result;
// }

//kebabToSnake()
//Replace - with _
function kebabToSnake(str) {
  return str.replace(/-/g,'_');
}

kebabToSnake("hello-world"); //"hello_world"
kebabToSnake("dogs-are-awesome"); //"dogs_are_awesome"
kebabToSnake("blah"); //"blah"

// function kebabToSnake(str) {
//   var newStr = str.replace(/-/g, "_");
//   return newStr;
// }



//Write a function printReverse() that takes an array as an argument 
//and prints out the elements in the array in reverse order
//(Don't actually reverse the array itself)

// function printReverse(array){
//   var reverse = array.reverse();
//   reverse.forEach(function(x){
//     console.log(x);
//   });
// }

function printReverse(subjectArray){
  var reverseArray = [];
  subjectArray.forEach(function(x){
    reverseArray.unshift(x);
  });
  return reverseArray;
};

//colt's solution
function printReverse(arr){
  for(var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

printReverse([1,2,3,4]);
//4
//3
//2
//1

printReverse(["a","b","c"]);
//c
//b
//a

//Write a function isUniform() which takes an array as an argument
//and returns true if all elements in the array are identical
function isUniform(subjectArray) {
  var firstIndex = subjectArray[0];
  var allIsSame = true;
  subjectArray.forEach(function(x){
    if (x !== firstIndex) {
      allIsSame = false;
    }
  });
  return allIsSame;
};

//colt's solution
function isUniform(arr){
  var first = arr[0];
  for(var i = 1; i < arr.length; i++){
    if(arr[i] !== first) {
      return false;
    }
  }
  return true;
}

isUniform([1, 1, 1, 1]);      //true
isUniform([2, 1, 1, 1]);      //false
isUniform(["a", "b", "p"]);   //false
isUniform(["b", "b", "b"]);   //true

//Write a function sumArray() that accepts an array of numbers and
//returns the sum of all numbers in the array
function sumArray(subjectArray) {
  var sum = 0;
  subjectArray.forEach(function(x) {
    sum = sum + x;
  });
  return sum;
}

//colt's solution
function sumArray(arr){
  var total = 0;
  arr.forEach(function(element){
    total += element;
  });
  return total;
}

sumArray([1, 2, 3]);        //6
sumArray([10, 3, 10, 4]);   //27
sumArray([-5, 100]);        //95

//Write a function max() that accepts an array of numbers and returns 
//the maximum number in the array
function max(subjectArray) {
  var biggestNumber = 0;
  subjectArray.forEach(function(x){
    if(x > biggestNumber) {
      biggestNumber = x;
    }
  });
  return biggestNumber;
}

//colt's solution
function max(arr){
  var max = arr[0];
  for(var i = 1; i < arr.length; i++){
    if(arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

max([1, 2, 3]);       //3
max([10, 3, 10, 4]);  //10
max([-5, 100]);       //100

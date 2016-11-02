// Evaluate the following code
// Exercise 1
// Loops through the odd numbers and prints each out until 9
// Expression will evaluate 11 

var num = 1;

while(num <= 10) {
  console.log(num);
  num += 2;
}

// Exercise 2
// While num is less than or 20, if it is a multiple of 4 it will
// print out the number. Expression will evaluate at 20.

var num = 1;

while(num <= 20) {
  if(num % 4 === 0) {
    console.log(num);
  }
  num++;
}
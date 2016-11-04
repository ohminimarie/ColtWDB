function square(num) {
  console.log(num * num);
}
square(10); //Prints out 100
square(3); //Prints out 9
square(4); //Prints out 16


function sayHello(){
  console.log("Hello there!");
}
sayHello();


function sayHello(name){
  console.log("Hello there," + name + "!");
}
sayHello("Rusty");


function area(length, width) {
  console.log(length * width);
}
area(9,2);


function greet(person1, person2, person3) {
  console.log("hi " + person1);
  console.log("hi " + person2);
  console.log("hi " + person3);
}
greet("Harry", "Ron", "Hermione");
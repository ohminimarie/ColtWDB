//if
//If you are younger than 18 
//you cannot enter the venue
//elseif
//If you are between 18 & 21
//you can enter but cannot drink
//else
//you can enter and drink

// if(age < 18) {
//   console.log("Sorry, you are not old enough to enter the venue.");
// } else if(age < 21) {
//   console.log("You can enter, but cannot drink");
// } else {
//   console.log("You can enter and drink");
// }


if (age < 0) {
  console.log("Sorry, that's not a real age");
} else if(age === 21) {
  console.log("Happy 21st Birthday!!");
} else if(age % 2 !== 0) {
  console.log("Your age is odd!");
} else if(Math.sqrt(age) % 1 === 0) {
  console.log("Perfect Square!");
}

//Given Solution
// // If age is negative  
// if(age < 0){
//   console.log("Come back once you're out of the womb");  
// }
// // If age is 21
// if(age === 21){
//   console.log("Happy 21st Birthday!");
// }
// //If age is odd
// //(not evenly divisible by two)
// if(age % 2 !== 0) {
//   console.log("Your age is odd!");  


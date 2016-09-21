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
} else if(age) {
  console.log("Perfect Square!");
}

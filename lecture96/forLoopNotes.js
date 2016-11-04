// for (init; condition; step) {
//   run some code
// }

//Example 1 For Loop vs. While Loop
for(var count = 0; count <6; count++) {
  console.log(count);
};

var count = 1;

while(count <6) {
  console.log("count is: " + count);
  count++
};

//Example 2 For Loop vs While Loop
var str = "hello";

for(var i = 0; i < str.length; i++) {
  console.log(str[i]);
};

var str = "hello";
var count = 0;

while(count < str.length) {
  console.log(str[count]);
  count++;
};
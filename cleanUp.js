// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit

//added semicolons? final tweak
// EX 1:
function nameQuestion() {
  console.log("Hello, what is your name?");
}

nameQuestion();

//fixed formatting, indent interior of code block, align last curly brace with function statement
//added semicolon
// EX 2:
function addThreeNums(first, second, third) {
  var sum = first + second + third;
  console.log(sum);
}

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);

//fix function keyword; func--> function 
//align final curly brace
// EX 3:
function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
}

makeFreshPesto();

//move the period into the backticks
//align curly braces 
//make code block same level of indentation
//call function to make sure it works 
//  EX 4:
function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;
  console.log(`the average is: ${avg}.`);
}

average(5,15)
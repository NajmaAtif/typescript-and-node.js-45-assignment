/*question 24
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array

*/

// Define variables
let apple = "apple";
let upperCaseApple = "APPLE"
let ten = 10
let twenty = 20
let fruits=["Apple","Banana","Orange"];

// Test for equality and inequality with string

console.log("is apple is equal to apple?");
console.log(apple == "apple")


console.log("is apple is not equal to apple?");
console.log(apple != "apple");

// Tests using lowerCase function
console.log("Is APPLE is equal to apple after converting to lowercase? ");
console.log(upperCaseApple.toLowerCase() == "apple");


console.log("Is APPLE is not equal to apple after converting to lowercase? ");
console.log(upperCaseApple.toLowerCase() != "apple");

// Numeric Test 

console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);


console.log("\n Is ten is not equal to twenty?");
console.log(ten != twenty);


// Greater than
console.log("\n Is ten is greater than Zero");
console.log(ten > 0);


// less than
console.log("\n Is 20 is less than 10");
console.log(twenty < 10);



// greater than or equal to
console.log("\n Is ten is greater than or equal to 5?");
console.log(ten >= 5)


// less than or equal to
console.log("\n Is twenty is less than or equal to 10?");
console.log(twenty <= 10)


// tests using "and" & "or" operators

// using && operator
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10)


console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30)

// using || (or)
console.log("\n 20 is greater than 50 or 20 is equal to 20");
console.log(20 > 50 || 20 == 20);


console.log("\n 20 is greater than 50 or 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);


//  Test whether an item is in a array
console.log("Is orange include in my fruits array?");
console.log(fruits.includes("Orange"));


console.log("Is orange not include in my fruits array?");
console.log(!fruits.includes("Orange"));

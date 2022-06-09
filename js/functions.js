"use strict";


// alert("Sanity check is this hooked up to the html file? ")

 //Create a function called 'sayHello' that takes a parameter 'name'.//
 //When called, the function should return a message that says hello to the passed in name.//

 //BREAK THE QUESTION DOWN
 //Step 1. write a function named 'sayHello'
 //Step 2. function needs 1 parameter named 'name'
 //Step 3. the body[the instructions} for the function need to RETURN a message
 //Step 4. that message is a STRING that says hello to 'name'

 //Example
 //> sayHello("codeup") // returns "Hello, codeup!"//

    //  function sayHello(name) {
    //

    //  return "Hello, " + name;
    // }

//Call the function 'sayHello' and pass your name as a string literal (a sequence of characters closed in "quotation marks") argument.
//Store the result of the function call in a variable named 'helloMessage'.

// console.log 'helloMessage' to check your work

 // let helloMessage = sayHello("Nat");
 //    console.log(helloMessage)

//  * Store your name as a string in a variable named 'myName', and pass that
//  * variable to the 'sayHello' function. You should see the same output in the
//  * console.
//
// Step 1. set a variable named 'myName'

//  let myName = "Nat";
//     console.log(sayHello(myName))

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
 var random = Math.floor((Math.random() * 3) + 1);

    //Create a function called 'isTwo' that takes a number as a parameter.
// The function should return a boolean value based on whether or not the passed
//number is the number 2.
 //Example
//isTwo(1) // returns false
// > isTwo(2) // returns true
// > isTwo(3) // returns false

//i. function name =isTwo
//ii. take in one param of num
//iii. return boolean
//iv. boolean  modified on T/F whether num === 2

CODE. function isTwo(num){
 return num === 2;
// }
// console.log(isTwo(random))

//Call the function 'isTwo' passing the variable 'random' as a argument.

//console.log outside of the function* to check your work (you should see a
// different result everytime you refresh the page if you are using the random
//number)

// CODE. console.log("The random number is currently = " + random);
// console.log(isTwo(random));


//      Create a function named 'calculateTip' to calculate a tip on a bill at a
// * restaurant. The function should accept a tip percentage and the total of the
// * bill, and return the amount to tip
// *
// * Examples:
// * > calculateTip(0.20, 20) // returns 4
// * > calculateTip(0.25, 25.50) // returns 6.375
// * > calculateTip(0.15, 33.42) // returns 5.013
// */
//i. function named calculateTip
//ii. sounds like a two parameter kind of show "a tip" and "the bill"
//iii. return number
//iv. the number is the math of the amount to tip based on bill total

 function calculateTip(tipAmount, billTotal) {
  let tipInDollars = tipAmount * billTotal;
  return tipInDollars
 }
 // ^^or could skip let statement & just return tipAmount * billTotal^^

// Use prompt and alert in combination with your calculateTip function to
// * prompt the user for the bill total and a percentage they would like to tip,
// * then display the dollar amount they should tip
// */

alert("Thank you for coming in for dinner - let's see how much your bill is and tip ")

let totalAmount = prompt("How much was your bill today? ")

let tipAsDecimal = prompt("How much would you like to tip $ + totalAmount + "?")

    alert("using my super cool javascript function, I have calculated that you will tip $" + calculateTip(tipAsDecimal, totalAmount))

//     * TODO:
// * Create a function named `applyDiscount`. This function should accept a price
// * (before a discount is applied), and a discount percentage (a number between 0
// * and 1). It should return the result of applying the discount to the original
// * price.
// *
// * Example:
// * > var originalPrice = 100;
// * > var discountPercent = .2; // 20%
// * > applyDiscount(originalPrice, discountPercent) // 80
// *
// * > applyDiscount(45.99, 0.12) // 40.4712

function applyDiscount(originalPrice, discountAsDeci){

//     return originalPrice - (originalPrice * discountAsDeci);
//      Below: a more advanced thought, we can call calcultaeTip into the mix here to D R Y - do our math that we want to
  return originalPrice - calculateTip(discountAsDeci, originalPrice);
}

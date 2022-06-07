 "use strict";

// /**
//  * TODO:
//  * Create a function named `analyzeColor` that accepts a string that is a color
//  * name as input. This function should return a message which relates to the
//  * color stated in the argument of the function. For colors you do not have
//  * responses written for, return a string stating so
//  *
//  * Example:
//  *  > analyzeColor('blue') // returns "blue is the color of the sky"
//  *  > analyzeColor('red') // returns "Strawberries are red"

 //i. write function named 'analyzeColor' that accepts string 'color'
 //ii. function needs parameter named 'green'
 //iii. return message related t/the 'color' stated in the argument
 //iv. colors not having a response, return "that is not one of the colors picked "

// function analyzeColor(color) {
//
//     if (color === 'blue') {
//         return 'blue' + ' is the color of the sky'
//     } else if (color === "red") {
//         return 'red' + " Strawberries are red";
//     } else if (color === "cyan") {
//         return 'cyan' +  " I don't know anything about cyan";
//     } else {
//         return color + " is NOT a EXCELLENT color choice!";
//     }
// }
//  console.log(analyzeColor("blue"));
//  console.log(analyzeColor("red"));
//  console.log(analyzeColor("cyan"));
//  console.log(analyzeColor("black"));
//
//
// // // Don't change the next two lines!
// // // These lines create two variables for you:
// // // - `colors`: a list of the colors of the rainbow
// // // - `randomColor`: contains a single random color value from the list (this
// // //                  will contain a different color every time the page loads)
//  // /**
//  //  * TODO:
//  //  * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
//  //  * You should see a different message every time you refresh the page
//  //  */
//  var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//  var randomColor = colors[Math.floor(Math.random() * colors.length)];
// //
// // console.log(analyzeColor(randomColor))
//
//
// //
// // /**
// //  * TODO:
// //  * Comment out the code above, and refactor your function to use a switch-case statement
//
//     let analyzeColor = prompt("What's your favorite color? ");
//
//     switch(analyzeColor){
//         case "red":
//         alert ("Smells like Roses");
//         break;
//         case "blue":
//             alert("is the color of the sky");
//             break;
//         case "yellow":
//             alert(" like a pretty butterfly");
//             break;
//
//         default:
//             alert(analyzeColor + " isn't my favorite color, but ROCK ON!");
//             break;

//}
// console.log(analyzeColor("blue"))
//  console.log(analyzeColor("red"))
//  console.log(analyzeColor("yellow"))
//  console.log(analyzeColor("pink"))


//
// /**
//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.
//  i. ask the user for a color
// ii. take the users color to 'analyzeColor' function
// iii. alert the return value & show

 // prompt("Would you please tell me your favorite color? ")
//
//
// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Suppose there's a promotion in Walmart, each customer is given a randomly
//  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
//  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
//  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
//  * everything for free!.
//  *
//  * Write a function named `calculateTotal` which accepts a lucky number and total
//  * amount, and returns the discounted price.

 //  * Example:
 //  * calculateTotal(0, 100) // returns 100
 //  * calculateTotal(4, 100) // returns 50
 //  * calculateTotal(5, 100) // returns 0
 //  *
 //  * Test your function by passing it various values and checking for the expected
 //  * return value.



  // var luckyNumber = [Math.floor(Math.random() * 6)];

// function calculateTotal(luckyNumber,totalAmount){
    //   let discountPrice = luckyNumber*totalAmount;
    //   return discountPrice
    // if (luckyNumber === 0){  //no discount
    //     return totalAmount + ' not A lucky number'
    // } else if (luckyNumber === 1) { //10 percent discount
    //      return totalAmount - (totalAmount * .10);
    // } else if (luckyNumber === 2) { //20 percent discount
    //     return totalAmount - (totalAmount * .20);
    // } else if (luckyNumber === 3) { //35 percent discount
    //     return totalAmount - (totalAmount * .30);
    // } else if (luckyNumber === 4) { //50 percent
    //     return totalAmount - (totalAmount * .10);
    // } else if (luckyNumber === 5) {
    //     return totalAmount + " YOU GET EVERYTHING FREE!!";
    // } else {
    //      return totalAmount + " BETTER luck NEXT TIME!";
    //
    // }

 // function calculateTotal(luckyNumber, totalAmount){
 //
 //     switch(luckyNumber){
 //        case 0:
 //            return " NOT A LUCKY NUMBER!";
 //            break;
 //        case 1:
 //            return "Your discount amount is $ " + (totalAmount * .10) + " your discounted total price is $ " + (totalAmount - (totalAmount * .10));
 //            break;
 //        case 2:
 //            return "Your discount amount is $ " + (totalAmount * .25) + " your discounted total price is $ " + (totalAmount - (totalAmount * .25));
 //            break;
 //         case 3:
 //             return "Your discount amount is $ " + (totalAmount * .35) + " your discounted total price is $ " + (totalAmount - (totalAmount * .35));
 //         case 4:
 //             return "Your discount amount is $ " + (totalAmount * .50) + " your discounted total price is $ " + (totalAmount - (totalAmount * .50));
 //         case 5:
 //             return "YOU GET EVERYTHING FREE $ " + (totalAmount * 1) + " your discounted total price is $ " +(totalAmount - (totalAmount * 1));
 //
 //        default:
 //            return "Sorry better luck next TIME! ";
 //            break;
  //   }

     // }
//



//  * Example:
//  * calculateTotal(0, 100) // returns 100
//  * calculateTotal(4, 100) // returns 50
//  * calculateTotal(5, 100) // returns 0
//  *
//  * Test your function by passing it various values and checking for the expected
//  * return value.
//  */
//
// /**
//  * TODO:
//  * Uncomment the line below to generate a random number between 0 and 5.
//  * (In this line of code, 0 is inclusive, and 6 is exclusive)
//  * i. Prompt the user for their total bill,
 //  ii. then use your `calculateTotal` function and alerts to display to the user what their lucky number was,
 //  iii. what their price before the discount was, and what their price after the discount is.
//   iv. Generate a random number between 0 and 6

//  var luckyNumber = Math.floor(Math.random() * 6);
//
// let totalBill = prompt("What is your total bill ? ");
//
// alert("Today your lucky number is " + luckyNumber + " totay your total is " + totalBill + " now you owe us " + totalAmount(luckyNumber, totalBill));




// /**
//  * TODO:
//  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//  * would like to enter a number. If they click 'Ok', prompt the user for a
//  * number, then use 3 separate alerts to tell the user:
//  *
//  * - whether the number is even or odd
//  * - what the number plus 100 is
//  * - if the number is negative or positive
//  *
//  * Do *NOT* display any of the above information
//  * if the user enters a value that is not of the number data type.
//  * Instead, use an alert to inform them of the incorrect input data type.
//  *
//  *
//  * Can you refactor your code to use functions?
//  * HINT: The way we prompt for a value could be improved
//  */


//  function numberGame() {
//
//     let userStart = confirm("Would you like to play the number game? ");
//
//     if (userStart) {
//         //where user wanted t/give us a number
//         let userNum = prompt("Please enter a number ");
//
//         userNum = Number(userNum);
//
//     if(isNan(Number(userNum)) //if I convert the input to a Number did I get NaN [true] or a numeric false [false - it is a number I got]
//
//         alert("Incorrect data type - your entered a value I don't like. ");
//  }else{
//
// //     There user entered Not a Number
//
//      alert("Do you want to enter a number, NOW?! ");
//  }else{
//
//      alert("Your number was even ")
//  }else

 // }





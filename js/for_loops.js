"use strict";


// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//
// For example, showMultiplicationTable(7) should output

//7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70

// alert(showMultiplicationTable(7)

//function showMultiplicationTable(x) {
// let i = 1
//
//         while (i < 11){
//         console.log("7" + " x "  + i + " = " + (7 * i));
//         i++;


// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:

// 123 is odd
// 80 is even
// 24 is even
// 199 is odd
// ...


//
// function getRndInteger(min, max) {
//
//     var Math.floor(Math.random() * (max - min + 1)) + min;
//
//     for (let i = 0; i <= 10; i++) {
//
//         let number = getRndInteger(20, 200);
//         if (number % 2 === 0) {
//             console.log(number + " is even");
//         } else {
//             console.log(number + " is odd");
//         }
//     }
// }

//Create a for loop that uses console.log to create the output shown below.
//1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999



// var output;
//
//     for (let i = 1; i <= 9; i++) {
//
//         output = "";
//
//         for (let j = 1; j <= i; j++) {
//         output += i;
//     }
//         console.log(output);

    // }

//Create a for loop that uses console.log to create the output shown below.

//100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

    // let x;
    //
    // for ( let i = 1; i >= 100; i++){
    //    x = i -= 5
    //
    //     console.log(output);

    // }



for (let i = 100; i >= 5; i-=5) {

    console.log(i);

}
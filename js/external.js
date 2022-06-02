"use strict";
console.log("Hello from external JavaScript");

alert('Welcome to my Website');

let userInput = prompt("What is your favorite color?");

alert("Great, " + userInput + " is my favorite color too!");

// Redo Exercise 3 now w/ user interaction.
//You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

let pricePerDay = 3
let numDaysRented = prompt("Thank you for using Kenny Howell Video - how many days would you like to rent your movie")

alert("Awesome! You'll be renting the movie for " + numDaysRented + ".Thank means your total is" + (numDaysRented * pricePerDay));

//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

let googlePay = 400;
let amazonPay = 380
let facebookPay = 350;

let totalGoogle = prompt("Hey, you're working hard - how many hours did you work for Google?");
let totalAmazon = prompt("Hey, you're working hard - how many hours did you work for Amazon?");
let totalFacebook = prompt("Hey, you're working hard - how many hours did you work for Facebook?");

let sumGoogle = googlePay * totalGoogle; //could create a variable to get the total?
//could also do it LIVE in the alert:

alert("Cool beans - here's what I'm seeing, you will earn $" + sumGoogle + "from working at Google. You'll earn $" + (totalAmazon * amazonPay) + "from Amazon. Finally, you'll earn $" + (totalFacebook * facebookPay) + "from Facebook! Good job!");


//A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
let timeInSchedule = confirm("Hey do you have time in your schedule for this class?")

let roomInClass = confirm("Did the class have room for an additional student?")

alert("It is " + (roomInClass && timeInSchedule) + "that you can attend this class with what you told me. ")


//A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

let moreThanTwo = confirm("Do you ahve more than two items in your cart? ")

let offerStillValid = confirm("Is the offer on the product still valid? ")

let premiumMember = confirm("Are you a premium member? ")

alert("Welcome to Howell - looks like you've brought me a cart! From what you told me it is " + (moreThanTwo && offerStillValid || premiumMember) + "that you get a cool hat and a discount today")
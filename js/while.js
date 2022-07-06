"use strict";


// Create a while loop that uses console.log() to create the output shown below.

let i = 1;

    while(i < 65536);{
    i = i * 2; //i *= 2;
    console.log(i);
}

// An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.

// This is how you get a random number between 50 and 100
// Math.floor(Math.random() * (max - min) ) + min;

// This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;

let allCones = Math.floor(Math.random() * (100 - 50) ) + 50;
    do {
        let conesSold = Math.floor(Math.random() * 5) + 1;
    //    amount of cones being bought by her clients
        if(allCones >= conesSold) {
            allCones = allCones - conesSold;
            console.log(conesSold + " cones have sold." + allCones);
        } else {
           console.log("there are only " + allCones + "left over " + conesSold + " .");
    }
}while (allCones !=0);
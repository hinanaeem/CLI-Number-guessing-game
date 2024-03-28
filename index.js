#! /usr/bin/env node
import inquirer from "inquirer";
//1) computer will generate a random number
//2) user input for guessing number
//3) compare user input with computer generated number and show result
console.log("\n\tWelcome to Code with Hina - CLI Number Guessing Game\n");
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-10",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed a right number.");
}
else {
    console.log("Sorry! you guessed a wrong number, Try Again.");
}
console.log(answer);

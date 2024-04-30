#! /usr/bin/env node

import inquirer from "inquirer"

const answers: {
    sentence : string
} = await inquirer.prompt(
    [
        {
            name: "sentence",
            message: "Enter your sentence to count the words:",
            type: "input",
        }
    ]
)

const words = answers.sentence.trim().split(" ")
console.log(words);

console.log(`Your sentence contains a total of words: ${words.length}`);
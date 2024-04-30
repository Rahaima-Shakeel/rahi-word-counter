import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "sentence",
        message: "Enter your sentence to count the words:",
        type: "input",
    }
]);
const words = answers.sentence.trim().split(" ");
console.log(words);
console.log(`Your sentence contains a total of words: ${words.length}`);

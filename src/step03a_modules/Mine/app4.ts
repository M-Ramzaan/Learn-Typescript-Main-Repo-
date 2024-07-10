import inquirer from "inquirer";

let answer = await inquirer.prompt([
  {
    name: "age",
    type: "input",
    message: "Enter your age",
  },
]);

console.log(
  "Insha Allah in" + (60 - answer.age) + "years you will be 60 years old."
);

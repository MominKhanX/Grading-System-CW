#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

// Print welcome message
console.log(chalk.bold.rgb(73, 158, 255)(`${chalk.bold.hex('#499EFF')(`\n  \t\t <<<======================================>>>`)}`));
console.log(chalk.rgb(0, 255, 51).bold("\n \t<================ Welcome to My Todo-List Application ================>\n"));
console.log(chalk.bold.rgb(73, 158, 255)(`${chalk.bold.hex('#499EFF')(`\t\t <<<======================================>>>\n`)}`));

let grade = [];
let userAnswer = await inquirer.prompt([
  {
    type: "input",
    name: "obtainedMarks",
    message: chalk.redBright("Enter your obtained marks:"),
  },
  {
    type: "input",
    name: "totalMarks",
    message: chalk.redBright("Enter total marks:"),
  },
]);
grade.push(+userAnswer.obtainedMarks);
grade.push(+userAnswer.totalMarks);

let obtainedMarks = grade[0];
let totalMarks = grade[1];

let percent = (obtainedMarks / totalMarks) * 100;
console.log(
  chalk.magentaBright.italic.bold("\n\t\t\t  Percentage:", percent.toFixed(2) + "%")
);

if (percent >= 90 && percent <= 100) {
  console.log("Your Grade is A1.");
}
 else if (percent >= 80 && percent <= 89) {
  console.log(chalk.greenBright.italic.bold("\t\t\t   Your Grade is A+."));
}
 else if (percent >= 70 && percent <= 79) {
  console.log(chalk.green.italic.bold("\t\t\t   Your Grade is A."));
}
 else if (percent >= 60 && percent <= 69) {
  console.log(chalk.yellowBright.italic.bold("\t\t\t   Your Grade is B."));
}
 else if (percent >= 50 && percent <= 59) {
  console.log(chalk.yellow.italic.bold("\t\t\t   Your Grade is C."));
}
 else if (percent >= 40 && percent <= 49) {
  console.log(chalk.cyan.italic.bold("\t\t\t   You are Passed."));
}
 else {
  console.log(chalk.redBright.italic.bold("\t\t\t   You are Fail"));
}
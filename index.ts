#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 1234;
console.log("Welcome to ATM");
console.log("Your current balance is $" + myBalance);

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: "Enter your pin",
  },
]);
if (pinAnswer.pin === myPin) {
  console.log("Correct PIN code!!!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      type: "list",
      message: "Select your operation",
      choices: ["Withdraw", "Check Balance", "Funds Transfer"],
    },
  ]);
  if (operationAns.operation === "Withdraw") {
    let amountAnswer = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: "Enter the amount to withdraw",
      },
    ]);
    if(amountAnswer.amount > 0 && amountAnswer.amount <= myBalance) {

    myBalance -= amountAnswer.amount;
    console.log("Your new balance is: $" + myBalance);
  }
  else {
    console.log("Invalid amount, Please enter a valid positive amount");
}

}
if(operationAns.operation === "Check Balance"){
    console.log("Your current balance is: $" + myBalance);
} else if (operationAns.operation === "Funds Transfer"){
    let amountAnswer = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: "Enter the amount to transfer",
        },
    ]);
    myBalance -= amountAnswer.amount;
    console.log("Your new balance is: $" + myBalance);
}
}

else {
  console.log("Incorrect PIN code! Try Again!");
}
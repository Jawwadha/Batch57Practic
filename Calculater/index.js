import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "numberone",
        message: "Kindly Enter your first Number:",
    },
    {
        type: "number",
        name: "numbertwo",
        message: "Kindly Enter your Second Number:",
    },
    {
        type: "number",
        name: "a",
        message: "Kindly Enter your Number for tble:",
    },
    {
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"],
        message: "Select Operator:",
    },
]);
const { a, numberone, numbertwo, operator } = answers;
let abc = numberone + numbertwo;
if (numberone && numbertwo && operator) {
    let abc = 0;
    if (operator === "+") {
        abc = numberone + numbertwo;
    }
    else if (operator === "-") {
        abc = numberone - numbertwo;
    }
    else if (operator === "*") {
        abc = numberone * numbertwo;
    }
    else if (operator === "/") {
        abc = numberone / numbertwo;
    }
    console.log("your result is :", abc);
}
else {
    console.log("Kindly enter valid number");
}
/*let b;
for (b = 1; b <= 10; b++) {
  {
    console.log(`${a} x ${b} = ${a * b} `);
  }
}*/

const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
const number1 = prompt("please enter the first number ");
const number2 = prompt("Please enter the second number  ");
const operator = prompt("Please choose the operation(+,-,/,*) :");

if(operator == "+")
{
let sum = +number1 + +number2;
console.log(number1,"  ",operator,"  ",number2," = ",  sum)

}
if(operator == "-")
{
let sum = +number1 - +number2;
console.log(number1,"  ",operator,"  ",number2," = ",  sum)

}if(operator == "/")
{
let sum = +number1 / +number2;
console.log(number1,"  ",operator,"  ",number2," = ",  sum)

}if(operator == "*")
{
let sum = +number1 * +number2;
console.log(number1,"  ",operator,"  ",number2," = ",  sum)

}

/*Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it. 
Your tasks: 
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!" 
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's 
BMI (28.3) is higher than John's (23.9)!" 
Hint: Use an if/else statement */

let markWeight = 78;
let markHeight = 1.69;

let johnWeight = 92;
let johnHeight = 1.95;

let markHigherBMI;

let markBMI = calculateBMI(markWeight, markHeight);
let johnBMI = calculateBMI(johnWeight, johnHeight);

console.log("Mark's BMI: "+markBMI.toFixed(2)); //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
console.log("John's BMI: "+johnBMI.toFixed(2));

if(markBMI>johnBMI){
  markHigherBMI = true;
  console.log("Mark's BMI is higher than John's BMI");
}

else{
  markHigherBMI = false;
  console.log("Mark's BMI is NOT higher than John's BMI");
}

function calculateBMI(mass, height){
  let bmi = (mass/(height*height));
  return bmi;
}
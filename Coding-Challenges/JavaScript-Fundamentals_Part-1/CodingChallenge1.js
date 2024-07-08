/*Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula: 
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter). 
Your tasks: 
  1. Store Mark's and John's mass and height in variables 
  2. Calculate both their BMIs using the formula (you can even implement both 
  versions) 
  3. Create a Boolean variable 'markHigherBMI' containing information about 
  whether Mark has a higher BMI than John. 
Test data: 
  § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall. 
  § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.*/

/*
Data 1:
let markWeight = 78;
let markHeight = 1.69;

let johnWeight = 92;
let johnHeight = 1.95;*/

//Data 2
let markWeight = 95;
let markHeight = 1.88;

let johnWeight = 85;
let johnHeight = 1.76;

let markHigherBMI;

let markBMI = calculateBMI(markWeight, markHeight);
let johnBMI = calculateBMI(johnWeight, johnHeight);

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
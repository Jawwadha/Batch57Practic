let a = 10;
let b = 15;
console.log(a + b);
if (a > b) {
  console.log("true");
} else {
  console.log("false");
}

for (a = 10; a <= 21; a += 3) {
  {
    console.log(a);
  }
}
//1. Hello World
let greeting: string = "Hello World!";
console.log(greeting);

//2. Basic Math

let a1: number = 40;
let b1: number = 50;
console.log(a1 + b1);
console.log(a1 * b1);
console.log(a1 - b1);
console.log(b1 / a1);

//3. Swapping Values
let a2 = 35;
let b2 = 55;
a1 = b1;
console.log(a2);

//4. Types Annotatation
let abc1: string = "This is string";
switch (abc1) {
  case abc1:
    5;
    break;
}

//5. Modulus Operator
let x1 = 65;
let y1 = 80;
console.log(y1 % x1);

//6. Increment Challenge

let s1 = 20;
let d2 = 40;
//s1=s1+1
s1++;
console.log(s1);

//7. Logical Gates
let q1 = "SHAHID";
let w1 = "MOHSIN";
let e1 = "RAFQAT";

if (q1 === "SHAHID" || w1 === "SAIF1") console.log("true");
else console.log("false");

if (q1 === "MOHSIN" && w1 === "RAFQAT") console.log("true");
else console.log("false");

if (q1 != "SHAHID" || (w1 = "MOHSIN")) console.log("true");
else console.log("false");

if (q1 != "MOHSIN" || (w1 = "MOHSIN")) console.log("true");
else console.log("false");

//8- Compound Assignment
let g = 20;
g += 2;
g -= 5;
g *= 3;
g /= 2;

console.log(g);

//9- Even or Odd
let n1 = 7;
if (n1 % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}

//10- Voting Eligibility
let S1 = 20;
let S2 = 17;

if (s1 >= 18) {
  console.log("user is eligible to vote");
} else {
  console.log("user is not eligible to vote");
}

if (S2 >= 18) {
  console.log("user is eligible to vote");
} else {
  console.log("user is not eligible to vote");
}

//11-Grading System

let marks = 70;

if (marks >= 90 && marks < 99) {
  console.log("Exceptional");
} else if (marks >= 80 && marks < 90) {
  console.log("Excellent");
} else if (marks >= 70 && marks < 80) {
  console.log("Very Good");
} else if (marks >= 60 && marks < 70) {
  console.log("Good");
} else if (marks >= 50 && marks < 60) {
  console.log("Average");
} else if (marks >= 40 && marks < 50) {
  console.log("Fail");
}

//12- Max of Three

//const numbers = [69, 420, 108, 47]
console.log(Math.max(69, 420, 108, 47, 500));
//console.log(numbers);

//13- Leap Year Checker

function leapyear(year: number) {
  // Return true if the year is divisible by 4 but not divisible by 100 unless it's also divisible by 400
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
console.log(leapyear(2024)); //
console.log(leapyear(2023)); //

//14- Fahrenheit to Celsius Converter
// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit: number): number {
  return ((fahrenheit - 32) * 5) / 9;
}
const fahrenheitTemperature = 80;
const celsiusTemperature = fahrenheitToCelsius(fahrenheitTemperature);
console.log(
  `${fahrenheitTemperature}°F is approximtscately equal to ${celsiusTemperature.toFixed(
    2
  )}°C.`
);

//15-Positive, Negative, or Zerok
let k1 = 15;
let k2 = -20;

//16- Multiplication Table
let b3 = 15;
let a3;
for (a3 = 1; a3 <= 10; a3++) {
  {
    console.log(`${b3}x${a3}=${a3 * b3}`);
  }
}

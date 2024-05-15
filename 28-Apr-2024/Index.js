"use strict";
//loops and types
//do while loop-- (conditon)// run and then check condition afterwards
//while loop-- check condition and then execute
//for loop-- check condition and then execute
//for(exp; exp2; exp3)}{}
//exp1:starting condition (let variable=0) it depends on you from where you want to start value
//exp2: ending condition(variable<5)
//step 1 condition
//stepp 2 true then execute else terminate
//step increment or decrement
/*for (let x = 0; x < 5; x++) {
  console.log("My Name is Jawad");
}
let x1 = ["a", "b", "c", "d"];

for (let x = 0; x < x1.length; x++) {
  console.log(x1);
}*/
/*function Table(input: number) {
  for (let x = 1; x <= 10; x++) {
    console.log(`${input} x ${x} = ${input * x}`);
  }
}
Table(6);

function myage(input: number) {
  //let jaw = 20;
  if (input > 18) {
    console.log("Adult");
  } else {
    console.log("Junior");
  }
}

myage(25);*/
//console.log(myage);
/*
console.log("Hello World");

let temperature: number = 2;
if (temperature < 20) {
  console.log("It is cold");
} else console.log("it is not cold");

let apple = 10;
console.log(apple - 3);
2;
function calculatearea(input: number) {
  console.log(input * 6.14);
}
calculatearea(3);

for (let a = 1; a <= 50; a++)
  if (a % 3 == 0) console.log("Fizz");
  else if (a % 5 == 0) console.log("buzz");
  else console.log(a);

let xy = 7;
if (xy % 2 == 0) console.log("Pakistan");
else console.log(xy);*/
/*const numberArrays = [1, 2, 3, 4, 5, -6, -7, -8, 0, 100];

const checkNumberPositive = (numberArray: number[]) => {
  let count = 0;
  //let values;
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > 0) {
      count = count + 1;
      //console.log(numberArrays);
    }
  }
  return count;
  //return values;
};

console.log("count", checkNumberPositive(numberArrays));*/
//console.log(checkNumberPositive(numberArrays));
const numarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const checkNumbereven1 = (numarray) => {
    let count = 0;
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < numarray.length; i++) {
        if (numarray[i] % 2 == 0) {
            count = count + 1;
            sum1 = numarray[i] + sum1;
        }
    }
    //return count;
    return sum1;
};
//console.log("count", checkNumbereven1(numarray));
console.log(checkNumbereven1(numarray));
/*
const numbers = [56, 66, 2, 3, 7];
const max = Math.max(...numbers);
const min = Math.min(...numbers);
console.log("max:", max);
console.log("min:", min);

// Function to find the maximum element in an array
function findMax(numbers: number[]): number {
  let maxNumber = numbers[0]; // Assume the first number is the maximum
  for (let num of numbers) {
    if (num > maxNumber) {
      maxNumber = num; // Update the maxNumber if current number is greater
    }
  }
  return maxNumber; // Return the maximum number
}

// Testing the function
const num = [5, 2, 9, 25, 1, 5, 6];
console.log(`The array is: [${num}]`);
console.log(`The maximum number is: ${findMax(num)}`);

const channelArray: string[] = ["one", "two", "three", "Apple"];

console.log(channelArray.indexOf("t"));
console.log(channelArray.includes("three"));


const myArray: string[] = ["apple",
    "banana", "orange"];
const searchString: string = "banana";
if (myArray.indexOf(searchString) !== -1) {
    console.log(`Array contains the
    string '${searchString}'.`);
} else {
    console.log(`Array does not contain
    the string '${searchString}'.`);
}*/
// Javascript script to check
// whether the String begins
// with something or not
// Function to check String
// begins with something or not
/*function check(str: string, pattern: string) {
  if (str.startsWith(pattern)) {
    console.log('String begins with "' + pattern + '"');
  } else {
     console.log("String doesn't " + 'begins with "' + pattern + '"');
  }
}

const myArray: string[] = ["apple", "banana", "orange"];
// Driver code
// String to check
let str = "Burn to shine";

// Pattern by which string
// begins or not
let pattern = "a";

//console.log('String = "' + str + '"');
//console.log('String should begin with = "' + pattern + '"');

// Call check function
check(str, pattern);

// Change string
str = "Happy coding";
// Change pattern
pattern = "happy";

//console.log('String = "' + str + '"');
//console.log('String should begin with = "' + pattern + '"');

// Calling check function
//check(str, pattern);
*/
/*const channelArray: string[] = ["one", "two", "three", "Apple"];

const checkNumbereven = (numarray: number[]) => {
  let count = 0;
  for (let i = 0; i < numarray.length; i++) {
    if (numarray[i] % 2 == 0) {
      count = count + 1;
    }
  }
  return count;
};*/

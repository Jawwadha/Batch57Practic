// Method 1: Using for Loop
// Initializing numbers array
let numbers = [10, 23, 12, 21];

// Declaring empty Even array
let even = [];
let count = 0;
let sum3 = 0;
let countsum = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) even.push(numbers[i]);
}

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    count = count + 1;
    countsum = numbers[i] + countsum;
  }
}
// Printing output
console.log(even);
console.log(`Even numbers in an array are: ${even}`);
console.log(countsum);

let strings1 = ["apple", "banana", "airport"];

let str = [];
let countstr = 0;
for (let i = 0; i < strings1.length; i++) {
  if (
    strings1.filter((strings1) => strings1.toLocaleLowerCase().startsWith("c"))
  )
    str.push(strings1[i]);
}

for (let i = 0; i < strings1.length; i++) {
  if (
    strings1.filter((strings1) => strings1.toLocaleLowerCase().startsWith("c"))
  ) {
    countstr = countstr + 1;
  }
}

console.log(str);
console.log(countstr);
//return words.filter((word) => word.toLowerCase().startsWith("a"));
/*
// Method 2: Using while Loop

// Initializing numbers array
let numbers1 = [44, 26, 48, 64, 27, 53];

// Declaring empty Even array
let even1 = [];
let i = 0;
while (i < numbers1.length) {
  if (numbers1[i] % 2 == 0) even1.push(numbers1[i]);
  i++;
}

// Printing output
console.log(`Even numbers in an array are: ${even1}`);
*/
//  Method 3: Using forEach Loop

// Initializing numbers array
// Initializing numbers array
// Initializing numbers array

/*// Method 4: Using filter Method

// Initializing numbers array
let numbers3 = [86, 41, 55, 85, 90, 24];

let evenNumbers = numbers3.filter(function (element) {
  return element % 2 === 0;
});

// Printing output
console.log(`Even numbers in an array are: ${evenNumbers}`);

///Method 5: Using for…of Loop

const even3 = [];
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const num of arr) {
  if (num % 2 === 0) {
    even3.push(num);
  }
}
console.log(even3);
*/

function wordsStartingWithA(words: string[]): string[] {
  return words.filter((word) => word.toLowerCase().startsWith("a"));
}

// Example usage:
const wordArray: string[] = ["Apple", "Banana", "Apricot", "Orange", "Avocado"];
const wordsWithA: string[] = wordsStartingWithA(wordArray);
console.log(wordsWithA); // Output: ["Apple", "Apricot", "Avocado"]

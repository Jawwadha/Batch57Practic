"use strict";
function wordsStartingWithA(words) {
    const filteredWords = [];
    for (const word of words) {
        if (word.startsWith("a") || word.startsWith("A")) {
            filteredWords.push(word);
        }
    }
    return filteredWords;
}
// Example usage:
const wordsArray = ["apple", "banana", "orange", "grape", "apricot"];
const wordsStartingWithAArray = wordsStartingWithA(wordsArray);
console.log(wordsStartingWithAArray); // Output: ["apple", "apricot"]
let newstring = [
    "apple",
    "cat",
    "banana",
    "orange",
    "grape",
    "apricot",
    "mango",
    "airport",
];
let newsrt1 = [];
for (let i = 0; i < newstring.length; i++) {
    if (newstring[i].startsWith("a") || newstring[i].startsWith("A"))
        newsrt1.push(newstring[i]);
}
console.log(newsrt1);
let newnumber = [2, 3, 5, 7, 9];
let newnum = [];
for (let i = 0; i < newnumber.length; i++) {
    newnum.push(newnumber[i] ** 2);
}
console.log(newnum);
function tostartwith1(input_array) {
    let c = [];
    let d = ["alpha", "Beta", "akram", "Naveed"];
    for (let i = 0; i <= input_array.length; i++) {
        // d = input_array[i];
        //if (d.toLowerCase().startsWith("a"))
        if (d[i].startsWith("a") || d[i].startsWith("A")) {
            c.push(d[i]);
        }
    }
    return c;
}
const word_array = ["alpha", "Beta", "akram", "Naveed"];
const newword_array = tostartwith1(word_array);
console.log(newword_array);

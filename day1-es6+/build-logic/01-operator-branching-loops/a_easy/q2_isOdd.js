/* Write a program to take a number input from user and determine whether the number is odd or even. */
const isOdd = (num) => `is ${num} odd -> ${num % 2 !== 0}`;
// test case
console.log(isOdd(5));
console.log(isOdd(6));
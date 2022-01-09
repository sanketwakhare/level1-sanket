/* Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251. */
const findMaxAndMin = (num1, num2) =>
    num1 > num2 ?
    `${num1} is maximum and ${num2} is minimum` :
    `${num2} is maximum and ${num1} is minimum`;
// test
console.log(findMaxAndMin(129, 251));
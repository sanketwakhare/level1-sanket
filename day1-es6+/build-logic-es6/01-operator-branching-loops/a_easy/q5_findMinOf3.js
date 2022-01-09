/* Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46. */
const findMin = (num1, num2, num3) => {
    const ans =
        num1 < num2 ? (num1 < num3 ? num1 : num3) : num2 < num3 ? num2 : num3;
    console.log(`min is ${ans}`);
};
// test
findMin(8, 23, 17);
findMin(8, 2, 17);
findMin(8, 23, 7);
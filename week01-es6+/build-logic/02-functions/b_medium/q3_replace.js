/*
Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
Example:
Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]*/

const replace = (A, num1, num2) => {

    for (let i = 0; i < A.length; i++) {
        if (A[i] == num1) {
            A[i] = num2;
        }
    }
    console.log('array after replacing -> ', A);
}

// tests
replace([1, 5, 3, 5, 6, 8], 5, 10);
replace([1, 5, 1, 1, 6, 1], 1, 100);
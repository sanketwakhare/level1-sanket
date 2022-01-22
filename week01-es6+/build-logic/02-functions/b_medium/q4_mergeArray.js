/*
Given two arrays, your function should return single merged array.
Example:
Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]*/

const mergeArray = (A, B) => {

    // using spread operator
    let output = [];
    output = [...A, ...B];
    console.log(output);
}

// tests
mergeArray([1, 3, 5], [2, 4, 6]);
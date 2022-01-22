/* Spread Operator 01*/

let arr1 = [4, 5, 6];
// Convert this array to [1,2,3,4,5,6,7,8]
arr1 = [1, 2, 3, ...arr1, 7, 8]
console.log(arr1);

// output ->[ 1, 2, 3, 4,5, 6, 7, 8]
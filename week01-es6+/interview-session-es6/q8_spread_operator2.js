/* Spread Operator 02*/

var arr1 = [1, 2];
// normal array inside array

// copy arr1 inside arr2
var arr2 = [arr1, [3, 4]];
console.log(arr2);
// output -> [[1,2],[3,4]]


// spread the arr2 inside arr3
var arr3 = [...arr2, [7, 8]];
console.log(arr3);
// output ->  [[1,2],[3,4],[7,8]]
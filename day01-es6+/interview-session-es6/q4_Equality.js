/* Equality with == and === */

let a = null;
let b;

// == checks does not check the type, it just check the value
// and null and undefined are both falsy values
console.log(a == b);

// strict checking
console.log(a === b);

console.log(typeof a);
console.log(typeof b);
// TODO: why type of null is object
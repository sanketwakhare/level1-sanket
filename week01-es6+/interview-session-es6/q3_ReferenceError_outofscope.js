/* ReferenceError example */

var a = 10;

{
    let b = 20;
    b = 30;
}
// ReferenceError: b is not defined
// as b is valid for only for the block scope declared above and not outside
console.log(b);
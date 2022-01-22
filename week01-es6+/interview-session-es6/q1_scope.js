/* Scope example*/

var num = 10; {
    let num = 20;
    console.log(num);
}
console.log(num);

// output ->
// 20
// 10
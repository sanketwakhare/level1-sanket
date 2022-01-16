/* Dynamic Field */
let key = 'ram'
const obj = {
    [key]: 122
}
console.log(obj);



/* Object Literal/ Shorthand property */
let aaloo = 1
let bhaaloo = 2

const obj1 = { aaloo: aaloo, bhaaloo: bhaaloo }
console.log(obj1)

// same as above , we can use shorthand
const obj2 = { aaloo, bhaaloo }
console.log(obj2) // { aaloo: 1, bhaaloo: 2}



/* Template Literal */
const isEven = (n) => {
    let isEven = n % 2 === 0;
    console.log(`number ${n} is ${isEven ? 'even' : 'not even'}`);
}
isEven(5);
isEven(8);
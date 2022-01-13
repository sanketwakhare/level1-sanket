// arrow function with single parameter
const isEven = (num) => num % 2 === 0;
console.log(isEven(1)); //false
console.log(isEven(2)); //true

const isEven2 = num => num % 2 === 0;
console.log(isEven2(1)); //false
console.log(isEven2(2)); //true

// add 5 to single number
const add5 = (num) => {
    return num + 5;
}
console.log(add5(12)); //17
console.log(add5(add5(12))); //22

// add 10 to each element in an array
const add10 = (arr) => {
    return arr.map(currentEle => currentEle + 10);
}
console.log(add10([3, 5, 7, 9])); //[ 13, 15, 17, 19 ]

// find squares of each element in an array
const square = (arr) => {
    return arr.map(currentEle => currentEle * currentEle);
}
console.log(square([3, 5, 7, 9])); //[ 9, 25, 49, 81 ]
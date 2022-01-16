const defaultExample = (a, b) => a + b
console.log(defaultExample(2)) // NaN

// is similar to below as if no parameter is passed it is initialized with undefined
console.log(2 + undefined); // NaN



// default parameter novice approach
const defaultExample2 = (a, b) => {
    if (b === undefined) {
        b = 5
    }
    return a + b;
}

// Instead use ES6 default parameter syntax
const defaultExample3 = (a, b = 5) => a + b

console.log(defaultExample2(2)) // 7
console.log(defaultExample3(3)) // 8




const defaultExample4 = (a, b = 5, c) => a + b + c

console.log(defaultExample4(1, 2, 3)); // 6

// compile error - as default parameters can be only last parameters
// console.log(defaultExample4(1, , 3));
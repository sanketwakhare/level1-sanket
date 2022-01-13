// functions declaration - normal function
function isOneNormal(num) {
    return num === 1 ? true : false
}

// function expression
const isOneFunExpr = function(num) {
    return num === 1 ? true : false
}

// Arrow function with single parameter
const isOneArrow = (num) => num == 1

console.log(isOneNormal(1));
console.log(isOneFunExpr(1));
console.log(isOneArrow(1));

console.log(isOneNormal(5));
console.log(isOneFunExpr(5));
console.log(isOneArrow(5));
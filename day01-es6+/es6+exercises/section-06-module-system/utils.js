const isEven = (n) => {
    return n % 2 === 0;
}

const isOdd = (n) => {
    return !isEven(n);
}

const add3 = (n) => {
    return n + 3;
}

const square = (n) => {
    return n * n;
}

export {
    isEven,
    isOdd,
    add3,
    square
}
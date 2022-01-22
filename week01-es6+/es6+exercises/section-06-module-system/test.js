import { add3, square, isEven, isOdd } from './utils.js';

let num = 3;
console.log('initial value ->', num);

num = add3(num);
console.log('add3 ->', num);

console.log('isOdd ->', isOdd(num));

num = square(num);
console.log('square ->', num);

console.log('isEven ->', isEven(num));
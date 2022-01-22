/***
 * Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
Example:
Input: findMin(3,5) ––> Output: 3
Input: findMin(3,5,9,1) ––> Output: 1
(Hint: Lookup rest parameters in JavaScript)
 * 
 */

const findMin = (...args) => {

    console.log(args);
    let min = args[0];
    for (let i = 0; i < args.length; i++) {
        if (args[i] < min) {
            min = args[i];
        }
    }
    console.log(`min -> ${min}`);
}

findMin(3, 5);
findMin(3, 5, 9, 1);
findMin(3, 5, 9, 10, 6, 2, 8);
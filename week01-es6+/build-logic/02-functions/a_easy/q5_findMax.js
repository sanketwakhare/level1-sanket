/* Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
Example:
Input: findMax(3,5) ––> Output: 5
Input: findMax(3,5,9,1) ––> Output: 9
(Hint: Lookup rest parameters in JavaScript)
 */

const findMax = (...args) => {

    console.log(args);
    let max = args[0];
    for (let i = 0; i < args.length; i++) {
        if (args[i] > max) {
            max = args[i];
        }
    }
    console.log(`max -> ${max}`);
}

findMax(3, 5);
findMax(3, 5, 9, 1);
findMax(3, 5, 9, 10, 6, 2, 8);
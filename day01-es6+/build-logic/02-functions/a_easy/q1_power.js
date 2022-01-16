/* 
Given a and b, your function should return the value of a*b

Example:
Input: power(2,3) ––> Output: 8 
*/

/***
 * recursive function
 */
const power = (a, b) => {

    // base conditions
    if (b === 0) {
        return 1;
    }
    if (a === 1) {
        return a;
    }

    // find a^b/2
    let p = power(a, Math.floor(b / 2));

    // a^b/2 * a^b/2 = a^b
    let ans = p * p;

    // if b is odd
    if (b % 2 !== 0) {
        ans = ans * a;
    }
    return ans;

}

// tests
console.log('power(2,3) ->  ', power(2, 3));
console.log('power(5,4) ->  ', power(5, 4));
console.log('power(10,3) ->  ', power(10, 3));
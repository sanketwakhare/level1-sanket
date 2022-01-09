/**
 * Factorial:
 * Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120 
 */

const fact = (N) => {
    let ans = 1;
    for (let i = 1; i <= N; i++) {
        ans = ans * i;
    }
    console.log(`factorial of ${N} is ${ans}`);
    return ans;
}

// tests
fact(0);
fact(1);
fact(3);
fact(5);
fact(6);
fact(7);
fact(10);
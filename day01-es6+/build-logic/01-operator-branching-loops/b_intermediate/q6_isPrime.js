/* Prime
Write a Program to take a number input from user and find if the number is Prime or not. */

const isPrime = (N) => {

    // count no of factors
    let isPrime = true;

    if (N === 1) {
        isPrime = false;
    }

    // iterate till sqrt(N)
    for (let i = 2; i * i <= N; i++) {
        if (N % i === 0) {
            isPrime = false;
            break;
        }
    }
    console.log(`${N} isPrime? -> ${isPrime}`);
    return isPrime;
}

isPrime(1);
isPrime(2);
isPrime(3);
isPrime(4);
isPrime(5);
isPrime(6);
isPrime(7);
isPrime(101);
isPrime(503);
isPrime(505);
isPrime(507);
/* Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21.... */

const fib = (N, series) => {
    let ans = series[N - 1] + series[N - 2];
    series.push(ans);
}

const generateFibonacci = (N) => {
    // initialize series
    let series = [0, 1];
    // iterative fibonacci approach
    for (let i = 2; i < N; i++) {
        fib(i, series);
    }
    console.log(series);
}

generateFibonacci(10);
generateFibonacci(20);
/* Write a program to take a number input from user and print multiplication table 12 times for that number. */

const multiplcationTable = (num1) => {
    // generate table first
    let table = [];
    let ans = 0
    for (let i = 1; i <= 10; i++) {
        ans = ans + num1;
        table.push(ans);
    }
    for (let c = 0; c < 12; c++) {
        console.log(table);
    }
};

multiplcationTable(5);
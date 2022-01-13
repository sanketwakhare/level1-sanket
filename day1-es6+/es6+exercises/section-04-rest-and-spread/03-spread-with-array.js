const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const spreadExample2 = ([first, second, ...rest]) => {
    console.log(first, second, rest)
}

spreadExample2(array); // 1 2  [3 4 5 6 7 8 9 10]

// rest with spread
spreadExample2([...array, 11, 12, 13]);
// 1 2 [3 4 5 6 7 8 9 10 11 12 13]
// example 01
const spreadExample = ({ a: aaloo, b: bhaaloo }) => {
    // destructuring
    // console.log(a,b)
    console.log(aaloo, bhaaloo)
}

const obj = { a: 1, b: 2 }
spreadExample(obj)


// example 02 - order of keys matter
const spreadExample2 = ({ b: bhaaloo, a: aaloo }) => {
    console.log(aaloo, bhaaloo)
}

const obj2 = { a: 1, b: 2 }
spreadExample2(obj2)
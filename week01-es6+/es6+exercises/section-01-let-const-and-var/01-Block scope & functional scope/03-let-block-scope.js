let a = 100;

const App = () => {
    // this will give ReferenceError as a is not declared at this line
    console.log('1', a);

    let a = 42;
    console.log('2', a);

    {
        // a will have value 100 for this block only
        let a = 100;
    }
    // a will be 42 inside this block
    console.log('3', a);
}
App();
console.log('4', a);
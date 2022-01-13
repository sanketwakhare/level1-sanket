let a = 100

const App = () => {
    a = 42;
    console.log('1', a)
}
App();
// no error as let declared outer scope can be accessed in inner scope

// a is parameter of the function App2
const App2 = (a) => {
    console.log('2', a);
}
App2();
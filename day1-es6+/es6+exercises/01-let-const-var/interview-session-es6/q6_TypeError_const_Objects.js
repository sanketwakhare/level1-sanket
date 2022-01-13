/* TypeError when const is reassigned*/

const myData = { name: 'Sanket', country: "India" };

// properties of const can be modified
myData.hobby = 'coding';
console.log(myData);


// TypeError: Assignment to constant variable
// ad constant object can not be reassigned
myData = { name: 'Gatha' }
console.log(myData);
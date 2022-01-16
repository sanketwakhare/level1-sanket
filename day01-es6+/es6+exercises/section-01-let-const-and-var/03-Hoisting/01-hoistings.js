function something() {

    // since a is not assigned a value yet, the default value of undefined is assigned
    // a = undefined
    console.log(a);

    // variables declared with var are hoisted. Hoisting means the variables are stored in global execution context
    var a = 2;
}

something();
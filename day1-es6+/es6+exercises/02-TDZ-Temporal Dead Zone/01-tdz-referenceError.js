function something() {

    // a can not accessed before initialization as it is declared with let
    // the area form start of this function to variable declaration a is called as TDZ

    // ReferenceError: Cannot access 'a' before initialization
    console.log(a);
    let a = 2;
}

something();
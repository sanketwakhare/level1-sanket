/* SyntaxError example */

{
    var a = 2;
    var a = 3;
    console.log(a);
    // will work as re-declarations for var is allowed
}

{
    let b = 18;
    let b = 20;

    console.log(b);
    // SyntaxError: Identifier 'b' has already been declared
    // for let and const the re-declarations are not allowed
}
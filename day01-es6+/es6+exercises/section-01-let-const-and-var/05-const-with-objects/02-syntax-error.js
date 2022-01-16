const obj = { a: 1, b: 2 }
const obj2 = { a: 3, b: 4 }

// error as value can not be re assigned to const
// SyntaxError: Identifier 'obj' has already been declared
obj = obj2
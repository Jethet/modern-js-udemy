// Create a symbol (a primitive data value)
// const sym1 = Symbol()

// // Can be used with an identifier:
// const sym2 = Symbol('sym2')

//console.log(Symbol() ===sym1); // returns false: each symbol has to be unique

// Unique Object keys
const KEY1 = Symbol()
const KEY2 = Symbol('sym2')

const myObj = {}

// To add KEY1 as a property, use brackets
myObj[KEY1] = 'Prop1'
myObj[KEY2] = 'Prop2'
console.log(myObj[KEY1]);


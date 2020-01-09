// Global scope versus block scope or local scope: var is unreliable

var a = 1;
let b = 2;
const c = 3;

function test(){
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function scope: ', a, b, c);
}

test();

//Block level scope (if - else statement etc.: anything wrapped in curly braces)
if(true) {
    // Block scope:
    var a = 4;  // -->> NOTE: global var changes through block scope, let/const do NOT change !!
    let b = 5;
    const c = 6;
    console.log('If scope: ', a, b, c);
}
// with var a = 4 in this statement, global var a = 4 (let and const unchanged: b = 2, c = 3)
console.log('Global scope: ', a, b, c);  // prints 4, 2, 3


for(var a = 0; a < 10; a++) {
    console.log(`Loop: ${a}`);  // this returns numbers from 0 to 9
}
console.log('Global scope: ', a, b, c); // a has changed to 10 in the global scope
// NUMBERS and MATH:
console.time('test');
    console.log("Hello World");
    console.log(123);
    console.warn(" warning");
console.timeEnd('test');

const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2,33,4,1,55,6,3,-2);
val = Math.max(2,33,4,1,55,6,3,-2);
val = Math.random();

val = Math.floor(Math.random() * 20 + 1);
console.log(val);

arrayNumbers = [2,33,4,1,55,6,3,-2];
console.log(arrayNumbers.find(function smaller(num) {
     return num > 2;
    }));
// This will return 33 because this is the first num in the array
// that is bigger than 2.
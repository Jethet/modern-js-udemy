let val;

const today = new Date();
let birthday = new Date('9-15-1981');

val = today;  // will print current date and time
val = birthday; // prints given date for birthday, line 4
console.log(val);
console.log(typeof val);  // val = object

val = today.getMonth();  // this gives binary result: Jan = 1, Nov = 10 etc.
console.log(val);
val = today.getDate();
console.log(val);
val = today.getDay();  // this gives numerical result with Sun being 0, Mon 1 etc.
console.log(val);
val = today.getFullYear();
console.log(val);
val = today.getHours();
console.log(val);
val = today.getTime();  // gives time since birthday date
console.log(val);

birthday.setMonth(5); // day, time, year all can be changed this way
console.log(birthday);
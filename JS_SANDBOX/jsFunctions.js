// Giving default values for parameters:

function countTwo(x = 5, y = 1){  // 5 and 7 are default values
    return x + y;
}
console.log(countTwo(12, 17)); // = 29
console.log(countTwo());  // No parameters given, so default parameters: = 6
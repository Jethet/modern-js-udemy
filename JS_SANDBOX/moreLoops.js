// break and continue:

// with continue, you can skip a step of a loop and continue with
// the following step:
/*
for(let i = 0; i < 10; i++){
    if(i === 7){
        console.log("This is it, no. 2 is not printed");
        continue;
    }
    console.log('Number ' + i);
}


// with break, you break out of the loop:

for(let i = 0; i < 10; i++){
    if(i === 7){
        console.log("This is it, no. 2 is not printed");
        continue;
    }
    if(i == 9){
        break;
    }
    console.log('Number ' + i);
}


// while loops: usually when it is unclear how many iterations
// the loop will have (in general, for loops are used when the 
// number of iterations is clear)

let i = 0;   // variable is set out of the loop and condition
            // is the only thing added to while()
while(i < 10){
    console.log('Number ' + i);
    i++;
}


// do ... while loop: this loop always runs at least once
let i = 100;
do {
    console.log('Number ' + i);
    i++;
}
while(i < 10);

*/
// forEach loop: use anonymous function with placeholder (here: current)

const cars = ["one", "two", "three", "four"];

cars.forEach(function(current, index, array){
    console.log(`${index+1} : ${current}`);
    console.log(array);
});


// map:

const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Sarah'},
    {id: 3, name: 'Helen'},
    {id: 4, name: 'Steve'}
];

const ids = users.map(function(user){
    return user.id;
});
console.log(ids);
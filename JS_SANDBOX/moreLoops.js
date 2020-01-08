// break and continue:

// with continue, you can skip a step of a loop and continue with
// the following step:

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
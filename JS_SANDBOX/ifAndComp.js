// Ternary operator: instead of if - else

const id = 108;

console.log(id ===100 ? 'CORRECT' : 'INCORRECT'); // = incorrect

let day;

switch(new Date().getDay()){
    case 0:     // Numerical for Sunday: week starts at Sun = 0
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 1:
        day = 'THursday';
        break;
    case 1:
        day = 'Friday';
        break;
    case 1:
        day = 'Saturday';
     break;
}
console.log(`Today is ${day}`);
// WINDOW METHODS / OBJECTS / PROPERTIES

/*
//Window methods (rather outdated)

// Alert: pop-up box with alert
window.alert("Hello World!"); --> also works without 'window'

// Prompt: similar to alert but takes input
const input = prompt();
alert(input); // The text field pops up and you can write in it

// Confirm: the user is asked to confirm something; 
// takes a message as variable that wil be printed to the console
if(confirm('Are you sure')){
    console.log("Yes");
} else {
    console.log('No');
// }
*/

/* Properties: 
determine height + width of window
*/
let val;
    // outer edges height and width
    val = window.outerHeight;
    val = window.outerWidth;

    // inner edges height and width (e.g. scrollbars)
    val = window.innerHeight;
    val = window.innerWidth;
    
console.log(val);

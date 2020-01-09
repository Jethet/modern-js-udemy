//WINDOW METHODS (these are more or less outdated)

// Alert: pop-up box with alert
window.alert("Hello World!"); --> also works without 'window'

// Prompt: similar to alert but takes input
const input = prompt();
alert(input); // The text field pops up and you can write in it

// Confirm: the user is asked to confirm something; takes a
//  message as variable that wil be printed to the console
if(confirm('Are you sure')){
    console.log("Yes");
} else {
    console.log('No');
}

//PROPERTIES: 
//determine height + width of window

let val;
    // outer edges height and width
    val = window.outerHeight;
    val = window.outerWidth;

    // inner edges height and width (e.g. scrollbars)
    val = window.innerHeight;
    val = window.innerWidth;

    // determine scroll points
    val = window.scrollY;  // scroll point Y-axis
    val = window.scrollX;  // scroll point X-axis

console.log(val);


//OBJECTS
//Location Object:

val = window.location;
// it is possible to print info from the location object:
val = window.location.hostname;
val = window.location.port;
val = window.location.href;

// Use location to redirect:
window.location.href = 'http://google.com';
// Reload
window.location.reload(); // the webpage will continuously reload
console.log(val);

// History Object - this gets the history two pages back:
window.history.go(-2);

// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;

console.log(val);



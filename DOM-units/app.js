let val; // val will be updated every time a property is tested:

val = document;
val = document.all;
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms; // returns all forms on webpage
val = document.forms[0].id;
val = document.forms[0].method;

val = document.links;
val = document.links[0]; // this is the link to the button 'Clear tasks'
val = document.links[0].className;

val = document.images;  // returns a collection of images if there are any
val = document.scripts; // returns the scripts used in the HTML
val = document.scripts[2].getAttribute('src'); //returns the source of the
                            // third script: app.js

// It is possible to use methods on the DOM, for example forEach()
let scripts = document.scripts;
let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
    console.log(script);
});

console.log(val);
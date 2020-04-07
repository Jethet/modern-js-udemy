// KEYBOARD AND INPUT EVENTS
const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const heading = document.querySelector('h5')
const select = document.querySelector('select')

// Clear input value
taskInput.value = "";

//form.addEventListener('submit', runEvent)

// Keydown - keyup - keypress:
//taskInput.addEventListener('keydown', runEvent)
//taskInput.addEventListener('keyup', runEvent) // event happens after you stop typing
//taskInput.addEventListener('keypress', runEvent)

// Focus: this event fires as soon as you click in the input field
//taskInput.addEventListener('focus', runEvent)
// Blur: when you click outside of the input field
//taskInput.addEventListener('blur', runEvent)

// Cut and paste are also events:
// taskInput.addEventListener('cut', runEvent)
// taskInput.addEventListener('paste', runEvent)

// Input: fires on any type of action
//taskInput.addEventListener('input', runEvent)

// Change:
select.addEventListener('change', runEvent)

function runEvent(e) {
    //e.preventDefault()
    console.log(`EVENT TYPE: ${e.type}`);

    console.log(e.target.value);
    
    //adds what you type as header h5
    //heading.innerText = e.target.value  
    
    //Get input value
    //console.log(taskInput.value);
    
    
}
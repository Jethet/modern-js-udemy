// LOCAL STORAGE
// local storage stays until manually removed;
// session storage is removed when session ends

// set local storage item
// localStorage.setItem('name', 'John')
// localStorage.setItem('age', '30')


// set session storage item
//sessionStorage.setItem('name', 'Beth')

// remove from storage:
//localStorage.removeItem('name')

// get from storage:
// const name = localStorage.getItem('name')
// const age = localStorage.getItem('age')

// console.log(name, age);

// clear all from local storage: value is turned into null
// localStorage.clear()
// console.log(name, age);

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault()
    const task = document.getElementById('task').value
    // To save more than one task:
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        // the result needs to be parsed into JSON, to be an object that can be used
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task)  // to change this in the local storage, reset the local storage:
    localStorage.setItem('tasks', JSON.stringify(tasks))
    alert('Task saved')
})

// the data in local storage is an array of strings: to loop with forEach, it must be parsed into JSON format:
const tasks = JSON.parse(localStorage.getItem('tasks'))

tasks.forEach((task) => {
    console.log(task);
    
})
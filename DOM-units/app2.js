// Access DOM: SINGLE ELEMENT SELECTORS
// getElementById()
console.log(document.getElementById('task-title'));
console.log(document.getElementById('task-title').id);

// Change styling using JS:
document.getElementById('task-title').style.background = '#333';
document.getElementById('task-title').style.color = '#fff';
document.getElementById('task-title').style.padding = '5px';
//document.getElementById('task-title').style.display = 'none'; // This makes it disappear
// style.display = 'none' is generally linked to an event (a button etc.).

// Instead of using document.getElementById('task-title) it is more
// efficient to put this into a variable:
const taskTitle = document.getElementById('task-title');

// Change content: this can be done in a number of ways
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// document.querySelector()
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));
document.querySelector('li').style.color = 'blue';
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3').style.color = 'green';

// document.getElementsByClassName
const items = document.getElementsByClassName('collection-item')
console.log(items);
console.log(items[0]);
items[0].style.color = 'red'

// using .querySelector() and .querySelectorAll() returns a node list.
// this means you can use array methods etc., which is not possible with
// .getElementsById() etc.: these return something that has to be
// converted to an array first, using Array.from()

// document.querySelectorAll
const items2 = document.querySelectorAll('ul.collection li.collection-item')
items2.forEach(function(item, index) {
    item.textContent = `${index}: Hello`
})
console.log(items2);

const liOdd = document.querySelectorAll('li:nth-child(odd)')
const liEven = document.querySelectorAll('li:nth-child(even)')

liOdd.forEach(function(li, index) {
    li.style.background = '#ccc'
})

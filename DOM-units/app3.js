let val;

const list = document.querySelector('ul.collection')
const listItem = document.querySelector('li.collection-item:first-child')

val = listItem
val = list

// get child nodes: this returns a node list (with line breaks counting as nodes!)
val = list.childNodes
val = list.childNodes[0].nodeName
val = list.childNodes[1].nodeType
// these numbers are linked to the type of node:
// 1 = Element
// 2 = Attribute (has been deprecated)
// 3 = Text code
// 8 = Comment
// 9 = Document itself
// 10 = Doctype

// get children element nodes: this returns an HTML collection (not types)
val = list.children
val = list.children[0]
list.children[1].textContent = 'Hello'
// children of children
list.children[3].children[0].id = 'test-link'
val = list.children[3].children

// get the number of child elements:
val = list.childElementCount

// get parent node
val = listItem.parentNode

// get siblings
val = listItem.nextSibling  // this gives the text node, because sibling is node
val = listItem.nextElementSibling // this gives the next element item, as sibling

//console.log(val);

// Create element
const li = document.createElement('li')

// Add class
li.className = 'collection-item'
// (same with id: li.id = 'id')

// Add attribute
li.setAttribute('title', 'New Item')

// Create text node and append (to get text into the li element)
li.appendChild(document.createTextNode('Hello World'))

// Create new link item for list item
const link = document.createElement('a')
// add class for link
link.className = 'delete-item secondary-content'
// add icon html to link
link.innerHTML = '<i class="fa fa-remove"></li>'
// append link into li item
li.appendChild(link)

// Get li as child to ul, into the DOM
document.querySelector('ul.collection').appendChild(li)

//console.log(li);

// Replacing elements
const newHeading = document.createElement('h2')
// Add id
newHeading.id = 'task-title'
// Add text node
newHeading.appendChild(document.createTextNode('Task List'))
// Get old heading
const oldHeading = document.getElementById('task-title')
// Get parent to be able to use 'replaceChild' on it
const cardAction = document.querySelector('.card-action')
cardAction.replaceChild(newHeading, oldHeading)

// Remove element
const liItems = document.querySelectorAll('li')
const llist = document.querySelector('ul')

// Remove list item
liItems[0].remove()

// CLASSES AND ATTRIBUTES
const lastLi = document.querySelector('li:last-child')
// get the link, using [0] for the first child of lastLi
const link2 = lastLi.children[0]
let val2;

// Classes
val2 = link.className
val2 = link.classList
val2 = link.classList[0]

link.classList.add('test')
link.classList.remove('test')
val = link

// Attributes
val2 = link.setAttribute('href', 'http://google.com')
val2 = link.hasAttribute('href')

console.log(val2);

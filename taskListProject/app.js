// Define UI variables  NB: classes like 'card' and 'collection' are formatted by Materialize
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
  // add task event
  form.addEventListener("submit", addTask);
}

// Add task function
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task");
  }

  // Create <li> element of task:
  const li = document.createElement("li");
  // add class:
  li.className = "collection-item";
  // create text node and append to <li>:
  li.appendChild(document.createTextNode(taskInput.value));
  
  // create new link element for each item for the delete icon (an x after the task)
  const link = document.createElement('a')
  // add class to link element:
  link.className = 'delete-item secondary-content'  // secondary-content means 'right' in Materialize
  
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>'  // this is the x icon to be added to each task
  // append link to <li>
  li.appendChild(link)

  // Append <li> to <ul>
  taskList.appendChild(li)

  // Clear input
  taskInput.value = '';

  e.preventDefault();
}

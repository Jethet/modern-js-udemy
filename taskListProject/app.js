// Define UI variables  NB: classes like 'card' and 'collection' are formatted by Materialize
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
  // DOM load event: to show the tasks that have been added and are in local storage
  // This means the tasks will be displayed when the page refreshes and the DOM loads
  document.addEventListener("DOMContentLoaded", getTasks);
  // add task event
  form.addEventListener("submit", addTask);
  // remove task event
  taskList.addEventListener("click", removeTask);
  // remove all tasks, using 'Clear Tasks' button
  clearBtn.addEventListener("click", clearTasks);
  // filter tasks event
  filter.addEventListener("keyup", filterTasks);
}

// Get tasks from local storage
function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  // if there are no tasks: set tasks to empty array
  // if there are tasks: loop through all tasks, to display:
  tasks.forEach(function (task) {
    // THIS IS THE CODE FROM BELOW - see: addTask(e)
    const li = document.createElement("li");
    li.className = "collection-item";
    li.appendChild(document.createTextNode(task));

    const link = document.createElement("a");
    link.className = "delete-item secondary-content";
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);

    taskList.appendChild(li);
  });
}

// Add task function
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task");
  } else {
    // Create <li> element of task:
    const li = document.createElement("li");
    // add class:
    li.className = "collection-item";
    // create text node and append to <li>:
    li.appendChild(document.createTextNode(taskInput.value));

    // create new link element for each item for the delete icon (an x after the task)
    const link = document.createElement("a");
    // add class to link element:
    link.className = "delete-item secondary-content"; // secondary-content means 'right' in Materialize

    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>'; // this is the x icon to be added to each task
    // append link to <li>
    li.appendChild(link);

    // Append <li> to <ul>
    taskList.appendChild(li);

    // Store task in local storage (then it does not disappear when page is refreshed)
    storeTaskInLocalStorage(taskInput.value); // see up where <li> element is created: this is the text

    // Clear input
    taskInput.value = "";

    e.preventDefault();
  }
}

// Store task in local storage
function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Remove task
function removeTask(e) {
  // this looks at the <a> class="delete-item" (parent of the icon that is is clicked)
  if (e.target.parentElement.classList.contains("delete-item")) {
    // get confirmation that user wants to delete (this shows pop-up to user!):
    if (confirm("Are you sure?")) {
      // to delete the entire task, we delete the parent of the <a> from the DOM:
      e.target.parentElement.parentElement.remove();

      // remove entire task also from local storage (LS):
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// Remove task data from LS
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach(function (task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Clear all tasks
function clearTasks() {
  // this can be done by using: taskList.innerHTML = ''
  // other option is while-loop (starting at the firstChild, because this will always be the
  // task left when deleting, until all are deleted) which is faster:
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  // clear from LS:
  clearTasksFromLocalStorage()
}

// Clear tasks from LS
function clearTasksFromLocalStorage() {
  localStorage.clear()
}

// Filter tasks
function filterTasks(e) {
  // e is the text that is typed in the field for 'Filter Tasks'
  const text = e.target.value.toLowerCase(); // matches if uppercase or lowercase are used

  document.querySelectorAll(".collection-item").forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  filter.value = '';
})

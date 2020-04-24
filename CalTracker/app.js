//Storage controller

// Item Controller (with IFFE)
const ItemCtrl = (function () {
  // Item constructor
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  // Data structure / state
  const data = {
    items: [
      // { id: 0, name: "Brie Risotto", calories: 800 },
      // { id: 1, name: "Coconut Pudding", calories: 500 },
      // { id: 2, name: "Chocolate Chip Cookies", calories: 150 },
    ],
    currentItem: null,
    totalCalories: 0,
  };

  // Return from the module: public method
  return {
    getItems: function () {
      return data.items;
    },
    addItem: function (name, calories) {
      let ID;
      // Create id for each item
      if (data.items.length > 0) {
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }

      // The data from the input fiels is type string: calories to number
      calories = parseInt(calories);

      // Create new item
      let newItem = new Item(ID, name, calories);
      // Add new item to items array
      data.items.push(newItem);
      return newItem;
    },
    getItemById: function (id) {
      let found = null;
      // Loop through items
      data.items.forEach(function (item) {
        if (item.id === id) {
          found = item;
        }
      });
      return found;
    },
    setCurrentItem: function (item) {
      data.currentItem = item;
    },
    getCurrentItem: function() {
      return data.currentItem
    },
    getTotalCalories: function () {
      let total = 0;
      // Loop through items and add calories to total
      data.items.forEach(function (item) {
        total += item.calories;
      });
      // Set total of calories in the data structure
      data.totalCalories = total;
      return data.totalCalories;
    },
    logData: function () {
      return data;
    },
  };
})();

// UI Controller
const UICtrl = (function () {
  const UISelectors = {
    itemList: "#item-list",
    addBtn: ".add-btn",
    updateBtn: ".update-btn",
    deleteBtn: ".delete-btn",
    backBtn: ".back-btn",
    itemNameInput: "#item-name",
    itemCaloriesInput: "#item-calories",
    totalCalories: ".total-calories",
  };

  // Return from the module: public method
  return {
    populateItemList: function (items) {
      let html = "";

      items.forEach(function (item) {
        html += `
          <li class="collection-item" id="item-${item.id}">
          <strong>${item.name}:</strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>
        `;
      });
      // Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    // Get item input
    getItemInput: function () {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value,
      };
    },

    addListItem(item) {
      // Show the list
      document.querySelector(UISelectors.itemList).style.display = "block";
      // Create li element
      const li = document.createElement("li");
      // Add class
      li.className = "collection-item";
      // Add ID
      li.id = `item-${item.id}`;

      // Add HTML:
      li.innerHTML = `<strong>${item.name}:</strong> <em>${item.calories} Calories</em>
      <a href="#" class="secondary-content">
      <i class="edit-item fa fa-pencil"></i>
      </a>`;
      // Insert item
      document.querySelector(UISelectors.itemList).insertAdjacentElement("beforeend", li);
    },
    clearInput: function () {
      document.querySelector(UISelectors.itemNameInput).value = "";
      document.querySelector(UISelectors.itemCaloriesInput).value = "";
    },
    addItemToForm: function() {
      document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name
      document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories
    UICtrl.showEditState()
    },
    hideList: function () {
      document.querySelector(UISelectors.itemList).style.display = "none";
    },
    showTotalCalories: function (totalCalories) {
      document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
    },
    clearEditState: function () {
      UICtrl.clearInput();
      document.querySelector(UISelectors.updateBtn).style.display = "none";
      document.querySelector(UISelectors.deleteBtn).style.display = "none";
      document.querySelector(UISelectors.backBtn).style.display = "none";
      document.querySelector(UISelectors.addBtn).style.display = "inline";
    },
    showEditState: function () {
      document.querySelector(UISelectors.updateBtn).style.display = "inline";
      document.querySelector(UISelectors.deleteBtn).style.display = "inline";
      document.querySelector(UISelectors.backBtn).style.display = "inline";
      document.querySelector(UISelectors.addBtn).style.display = "none";
    },
    // Make the UISelectors accessible for use in other functions: return them
    getSelectors: function () {
      return UISelectors;
    },
  };
})();

// App Controller
const App = (function (ItemCtrl, UICtrl) {
  // Load all event listeners
  const loadEventListeners = function () {
    // Get UI Selectors
    const UISelectors = UICtrl.getSelectors();

    // Add item event
    document.querySelector(UISelectors.addBtn).addEventListener("click", itemAddSubmit);

    // Disable submit on enter: check if the key that was pressed is 'enter'
    document.addEventListener('keypress', function(e) {
      if(e.keyCode === 13 || e.which === 13) {
        e.preventDefault()
        return false
      }
    })

    // Edit icon on click event: target icon button via ul (parent element)
    document.querySelector(UISelectors.itemList).addEventListener("click", itemEditClick);
  
    // Update item event
    document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit)
  };

  // Add item submit
  const itemAddSubmit = function (e) {
    // Get form input from UI Controller
    const input = UICtrl.getItemInput();

    // Check for name and calorie input
    if (input.name !== "" && input.calories !== "") {
      // add item: I DID NOT USE newItem HERE BECAUSE OF THE CONFUSION; CAN LEAD TO ERROR
      const addedItem = ItemCtrl.addItem(input.name, input.calories);

      // Add addedItem to UI list
      UICtrl.addListItem(addedItem);

      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      //add total calories to UI field
      UICtrl.showTotalCalories(totalCalories);

      // Clear fields
      UICtrl.clearInput();
    }
    e.preventDefault();
  };

  /* Note: the classList property returns the class name(s) of an element, as a 
  DOMTokenList object. This property is useful to add, remove and toggle CSS classes 
  on an element. The classList property is read-only, but can be modified by using the
  add() and remove() methods.
  */
  // Click edit item
  const itemEditClick = function (e) {
    e.preventDefault();
    if (e.target.classList.contains("edit-item")) {
      // Get item id as it is in the list item (note: list item has 'item-0', 'item-1' etc.)
      const listId = e.target.parentNode.parentNode.id; //via the <a> to the <li> parent

      // Break up the list item into an array, to separate 'item' from 'id'
      const listIdArr = listId.split("-");
      // Get actual id (which is index 1 of array after splitting list) and make number
      const id = parseInt(listIdArr[1]);

      // Get item we want to edit
      const itemToEdit = ItemCtrl.getItemById(id);

      // Set current item
      ItemCtrl.setCurrentItem(itemToEdit);
      // Add item to form
      UICtrl.addItemToForm()
    }
  };

  // Update item submit
  const itemUpdateSubmit = function(e) {
    e.preventDefault()
    console.log('update');
    
  }

  // Return from the module: public method
  return {
    init: function () {
      // Set initial state
      UICtrl.clearEditState();

      // Fetch items from data structure
      const items = ItemCtrl.getItems();

      // Check if any items in list
      if (items.length === 0) {
        UICtrl.hideList();
      } else {
        // Populate list with items
        UICtrl.populateItemList(items);
      }
      // Get total calories from local storage at the start of the session
      const totalCalories = ItemCtrl.getTotalCalories();
      UICtrl.showTotalCalories(totalCalories);

      // Load event listeners
      loadEventListeners();
    },
  };
})(ItemCtrl, UICtrl);

// Initialize app
App.init();

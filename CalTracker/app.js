//Storage controller
const StorageCtrl = (function () {
  // Public methods
  return {
    storeItem: function (item) {
      let items;
      // Check if any items in local storage
      if(localStorage.getItem('items') === null) {
        items = []
        // Push new item
        items.push(item)
        // Set local storage
        localStorage.setItem('items', JSON.stringify(items))
      } else {
        // Get what is already in local storage
        items = JSON.parse(localStorage.getItem('items'))
        // Push new item
        items.push(item)
        // Reset local storage
        localStorage.setItem('items', JSON.stringify(items))
      }
    },
    // Get items from storage
    getItemsFromStorage: function() {
    let items
    if(localStorage.getItem('items') === null) {
      items = []
    } else {
      items = JSON.parse(localStorage.getItem('items'))
    }
    return items
  },
  updateItemStorage: function(updatedItem) {
    let items = JSON.parse(localStorage.getItem('items'))

    items.forEach(function(item, index) {
      if(updatedItem.id === item.id) {
        items.splice(index, 1, updatedItem)
      }
    })
    localStorage.setItem('items', JSON.stringify(items))
  },
  deleteItemsFromStorage: function(id) {
    let items = JSON.parse(localStorage.getItem('items'))
    items.forEach(function(item, index) {
      if(id === item.id) {
        items.splice(index, 1)
      }
    })
    localStorage.setItem('items', JSON.stringify(items))
  },
  clearItemsFromStorage: function() {
    localStorage.removeItem('items')
  }
  };
})();


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
    items: StorageCtrl.getItemsFromStorage(),
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
    // This will update the item in the data structure (not in the UI)
    updateItem: function (name, calories) {
      // Calories from form are string: change into number
      calories = parseInt(calories);

      let found = null;
      data.items.forEach(function (item) {
        if (item.id === data.currentItem.id) {
          item.name = name;
          item.calories = calories;
          found = item;
        }
      });
      return found;
    },
    deleteItem: function (id) {
      // Get ids
      const ids = data.items.map(function (item) {
        return item.id;
      });
      // Get index
      const index = ids.indexOf(id);
      // Remove item
      data.items.splice(index, 1);
    },
    clearAllItems: function () {
      data.items = [];
    },
    setCurrentItem: function (item) {
      data.currentItem = item;
    },
    getCurrentItem: function () {
      return data.currentItem;
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
    listItems: "#item-list li",
    addBtn: ".add-btn",
    updateBtn: ".update-btn",
    deleteBtn: ".delete-btn",
    backBtn: ".back-btn",
    clearBtn: ".clear-btn",
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
    updateListItem: function (item) {
      let listItems = document.querySelectorAll(UISelectors.listItems);
      // This returns a node list: a node list has to be changed into an array to loop over it
      listItems = Array.from(listItems);

      listItems.forEach(function (listItem) {
        const itemID = listItem.getAttribute("id");

        if (itemID === `item-${item.id}`) {
          document.querySelector(`#${itemID}`).innerHTML = `
          <strong>${item.name}:</strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
          </a>`;
        }
      });
    },
    deleteListItem: function (id) {
      const itemID = `#item-${id}`;
      const item = document.querySelector(itemID);
      item.remove();
    },
    clearInput: function () {
      document.querySelector(UISelectors.itemNameInput).value = "";
      document.querySelector(UISelectors.itemCaloriesInput).value = "";
    },
    addItemToForm: function () {
      document.querySelector(
        UISelectors.itemNameInput
      ).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(
        UISelectors.itemCaloriesInput
      ).value = ItemCtrl.getCurrentItem().calories;
      UICtrl.showEditState();
    },
    removeItems: function () {
      let listItems = document.querySelectorAll(UISelectors.listItems);

      // Turn node list into array
      listItems = Array.from(listItems);

      listItems.forEach(function (item) {
        item.remove();
      });
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
const App = (function (ItemCtrl, StorageCtrl, UICtrl) {
  // Load all event listeners
  const loadEventListeners = function () {
    // Get UI Selectors
    const UISelectors = UICtrl.getSelectors();

    // Add item event
    document.querySelector(UISelectors.addBtn).addEventListener("click", itemAddSubmit);

    // Disable submit on enter: check if the key that was pressed is 'enter'
    document.addEventListener("keypress", function (e) {
      if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
      }
    });

    // Edit icon on click event: target icon button via ul (parent element)
    document.querySelector(UISelectors.itemList).addEventListener("click", itemEditClick);

    // Update item event
    document
      .querySelector(UISelectors.updateBtn)
      .addEventListener("click", itemUpdateSubmit);

    // Delete item event
    document
      .querySelector(UISelectors.deleteBtn)
      .addEventListener("click", itemDeleteSubmit);

    // Back button event
    document
      .querySelector(UISelectors.backBtn)
      .addEventListener("click", UICtrl.clearEditState);
    // Clear items event
    document
      .querySelector(UISelectors.clearBtn)
      .addEventListener("click", clearAllItemsClick);
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

      // Store in local storage
      StorageCtrl.storeItem(addedItem);

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
      UICtrl.addItemToForm();
    }
  };

  // Update item submit
  const itemUpdateSubmit = function (e) {
    e.preventDefault();
    // Get item input
    const input = UICtrl.getItemInput();

    // Update item
    const updatedItem = ItemCtrl.updateItem(input.name, input.calories);

    // Update UI with updated item
    UICtrl.updateListItem(updatedItem);

    // Get total calories
    const totalCalories = ItemCtrl.getTotalCalories();
    //add total calories to UI field
    UICtrl.showTotalCalories(totalCalories);

    // Update local storage
    StorageCtrl.updateItemStorage(updatedItem)

    UICtrl.clearEditState();
  };

  // Delete button event
  const itemDeleteSubmit = function (e) {
    e.preventDefault();
    // get current item
    const currentItem = ItemCtrl.getCurrentItem();
    // Delete from data structure
    ItemCtrl.deleteItem(currentItem.id);
    // Delete from UI
    UICtrl.deleteListItem(currentItem.id);

    // Recalculate total calories
    const totalCalories = ItemCtrl.getTotalCalories();
    // Display calculated calories to UI field and clear input fields
    UICtrl.showTotalCalories(totalCalories);

    // Delete from local storage
    StorageCtrl.deleteItemsFromStorage(currentItem.id)

    UICtrl.clearEditState();
  };

  // Clear all items event
  const clearAllItemsClick = function () {
    // Delete all items from the data structure
    ItemCtrl.clearAllItems();

    const totalCalories = ItemCtrl.getTotalCalories();
    // Display calculated calories to UI field and clear input fields
    UICtrl.showTotalCalories(totalCalories);

    // Remove from UI
    UICtrl.removeItems();

    // Clear from local storage
    StorageCtrl.clearItemsFromStorage()

    // Hide the ul
    UICtrl.hideList();
  };

  // Return from the module: public methods
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
})(ItemCtrl, StorageCtrl, UICtrl);

// Initialize app
App.init();

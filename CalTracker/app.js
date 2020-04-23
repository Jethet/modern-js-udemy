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
      { id: 0, name: "Brie Risotto", calories: 800 },
      { id: 1, name: "Coconut Pudding", calories: 500 },
      { id: 2, name: "Chocolate Chip Cookies", calories: 150 },
    ],
    currentItem: null,
    totalCalories: 0,
  };
  // Return from the module: public method
  return {
    logData: function () {
      return data;
    },
  };
})();

// UI Controller
const UICtrl = (function () {
  console.log("UI controller");

  // Return from the module: public method
  return {};
})();

// App Controller
const App = (function (ItemCtrl, UICtrl) {
  // Return from the module: public method
  return {
    init: function () {
      console.log("app initialise");
    },
  };
})(ItemCtrl, UICtrl);

// Initialize app
App.init();

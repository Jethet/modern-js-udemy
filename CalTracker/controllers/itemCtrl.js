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
      {id: 0, name: 'Brie Risotto', calories: 800},
      {id: 1, name: 'Coconut Pudding', calories: 500},
      {id: 2, name: 'Chocolate Chip Cookies', calories: 150}
    ],
    currentItem: null,
    totalCalories: 0
  }
  return {
    logData: function() {
      return data
    }
  }
})();

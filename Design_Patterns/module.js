// Module pattern and Revealing module pattern
// Basic structure with IIFE: (function() { .... return .... })()

// Standard module pattern: everything is private (not accessible outside the IIFE)
// EXCEPT what is returned
const UICtrl = (function() {
  let text = 'Hello World'

  const changeText = function() {
    const element = document.querySelector('h1')
    element.textContent = text
  }
  return {
    callChangeText: function() {
      changeText()
      console.log(text);
    }
  }
})()

UICtrl.callChangeText()


// The Revealing Module Pattern: allows to reveal certain methods from the module
const ItemCtrl = (function() {
  let data = []

  function add(item) {
    data.push(item)
    console.log('Item added.');
  }
  function get(id) {
    return data.find(item => {
      return item.id === id
    })
  }
  return {
    add: add,
    get: get
  }
})()

ItemCtrl.add({id: 1, name: 'John'})
console.log(ItemCtrl.get(1))
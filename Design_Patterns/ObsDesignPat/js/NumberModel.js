class NumberModel {
  constructor() {
    this.number = 0
    this.color = 'red'
    this.observers = []
  }

  increment() {
    const colors = ['orange', 'red', 'green', 'blue']
    this.number++
    this.color = colors[Math.floor(Math.random() * colors.length)]

    // Notify observers that change has been made:
    this.notifyObservers()
  }

  addObserver(o) {
    this.observers.push(o)
  }

  notifyObservers() {
    for (let o of this.observers) {
      // the update method parameter is an instance the model itself: from there
      // the update method of each observer can access the number and color properties.
      o.update(this)
    }
  }
}
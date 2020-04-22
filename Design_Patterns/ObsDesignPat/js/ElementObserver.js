class ElementObserver {
  constructor(elementId) {
    this.element = document.getElementById(elementId);
  }

  // this refers to the NumberModel, see notifyObservers(this) in that file
  update(model) {
    this.element.innerHTML = model.number
    this.element.style.backgroundColor = model.color 
  }
}

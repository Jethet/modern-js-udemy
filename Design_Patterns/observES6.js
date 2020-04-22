// Change OOP-based ES5 into ES6:

// example with prototypes:
class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter(function (item) {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  }

  fire() {
    this.observers.forEach(function (item) {
      item.call();
    });
  }
}

const click = new EventObserver();

// Event listeners
document.querySelector(".sub-ms").addEventListener("click", function () {
  click.subscribe(getCurMilliseconds);
});

document.querySelector(".unsub-ms").addEventListener("click", function () {
  click.unsubscribe(getCurMilliseconds);
});

document.querySelector(".fire").addEventListener("click", function () {
  click.fire();
});

// Click handler
const getCurMilliseconds = function () {
  console.log(`Current milliseconds: ${new Date().getMilliseconds()}`);
};

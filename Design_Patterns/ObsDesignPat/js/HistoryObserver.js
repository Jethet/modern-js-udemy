class HistoryObserver {
  constructor() {
    this.colorHistory = []
  }

  update(model) {
    this.colorHistory.unshift(model.color.toUpperCase())

    let message = 'The most recent 5 colors were: '
    for (let i = 0; i < 5; i++) {
      if (this.colorHistory[i]) {
        message += this.colorHistory[i] + ' '
      }
    }
    console.log(message);
    
  }
}
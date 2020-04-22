// Mediator design pattern example: chatroom

const User = function(name) {
  this.name = name
  this.chatroom = null
}

User.prototype = {
  send: function(message, to) {
    this.chatroom.send(message, this, to)  // 'this' pertains to the user
  },
  receive: function(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
    
  }
}

const Chatroom = function() {
  let users = {}

  return {
    register: function(user) {
      users[user.name] = user
      user.chatroom = this  // 'this' pertains to the current chatroom
    },
    send: function(message, from, to) {
      if (to) {
        // Single user message
        to.receive(message, from)
      } else {
        // Message to all
        for (key in users) {
          if (users[key] !== from) {
            users[key].receive(message, from)
          }
        }
      }
    }
  }
}

const helen = new User('Helen')
const sarah = new User('Sarah')
const bob = new User('Bob')
const frank = new User('Frank')

const chatroom = new Chatroom()

chatroom.register(helen)
chatroom.register(sarah)
chatroom.register(bob)
chatroom.register(frank)

helen.send('Hello Sarah', sarah)
sarah.send('Hello Helen, good to hear from you', helen)
bob.send('Hello everyone, welcome!')
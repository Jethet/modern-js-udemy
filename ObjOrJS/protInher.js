// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Prototype method
Person.prototype.greeting = function () {
  return `Hello ${this.firstName} ${this.lastName}`;
};

const person1 = new Person("John", "Doe");
//console.log(person1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype)

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer

const customer1 = new Customer('Tom', 'Smith', '+31 123 456 7890', 'standard')
//console.log(customer1);

//console.log(customer1.greeting());


// USING OBJECT.CREATE METHOD
const personPrototypes = {
  greeting: function() {
    return `Hello ${this.firstName} ${this.lastName}`
  },
  hasBirthday: function(newAge) {
  this.age = newAge
}
}

const mary = Object.create(personPrototypes)
mary.firstName = 'Mary'
mary.lastName = 'Williams'
mary.age = 30

mary.hasBirthday('31')
console.log(mary.greeting(), mary.age);

const bob = Object.create(personPrototypes, {
  firstName: {value: 'Bob'},
  lastName: {value: 'Smith'},
  age: {value: 25}
})

console.log(bob);
console.log(bob.greeting());


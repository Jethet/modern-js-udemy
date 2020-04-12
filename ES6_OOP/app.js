// ES6 JS with classes

// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
//   }

//   greeting() {
//     return `Hello ${this.firstName} ${this.lastName}`;
//   }

//   calculateAge() {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }
// }

// const mary = new Person("Mary", "Smith", "1980-10-15");

// console.log(mary.greeting());

// console.log(mary.calculateAge());

// console.log(mary);

// ES6 - SUBCLASSES

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello again ${this.firstName} ${this.lastName}.`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 500
  }
}

const john = new Customer("John", "Doe", "555-555-5555", "Standard");

console.log(john.greeting());
console.log(Customer.getMembershipCost());


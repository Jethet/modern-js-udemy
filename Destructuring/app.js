// Destructuring assignment

let a, b
[a, b, c, ...rest] = [100, 200, 300, 400, 500]
console.log(rest);

// This can also be done with objects:
({a, b, ...rest} = {a: 100, b: 200, c: 300, d: 400, e: 500})
console.log(rest);

// Array destructuring example:
const people = ['John', 'Helen', 'Ann', 'Mike']
const [person1, person2, person3] = people
console.log(person3);

// Parse array returned from a function:
function getPeople() {
  return ['John', 'Helen', 'Ann']
}

// let person1, person2, person3
[person1, person2, person3] = getPeople()
console.log(person1, person2, person3);


// Object destructuring
const person = {
  name: 'Helen Baker',
  age: 32,
  city: 'London',
  gender: 'female',
  sayHello: function(){
    console.log('Hello');
  }
}

// ES5
const name = person.name
      age = person.age
      // etc

// ES6
const { name, age, city, sayHello } = person
console.log(name, age, city);
sayHello()


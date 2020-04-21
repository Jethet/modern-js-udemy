// Iterator & generator new in ES6: work like advanced loops that can be paused

// Iterator example:
// function nameIterator(names) {
//   let nextIndex = 0;

//   return {
//     next: function () {
//       return nextIndex < names.length
//         ? { value: names[nextIndex++], done: false }
//         : { done: true };
//     },
//   };
// }

// const namesArr = ['Jack', 'Jill', 'John']

// // Init the iterator and pass in the names array:
// const names = nameIterator(namesArr)

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next());

// Generator example (result is the same as above: generator & iterator are very similar):
// function* sayNames() {
//   yield 'Jack';
//   yield 'Jill';
//   yield 'John';
// }

// const name = sayNames()

// console.log(name.next());
// console.log(name.next().value);
// console.log(name.next()).value;

// Example: generator that keeps adding 1
function* createIds() {
  let index = 0

  while(true) {
    yield index++
  }
}
const gen = createIds()

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

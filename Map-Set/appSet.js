// SETS
// Set: collection of values (without keys!). Each value can only occur once:
// a set has unique values. The same value cannot be added again.

// Create a set in two ways:
const set1 = new Set()

set1.add(1000)
set1.add('A string')
set1.add({name: 'John'})
set1.add(true)

// or:
set2 = new Set([5, false, 'string'])

// Get count:
console.log(set2.size)

// Check for values: (this cannot be done with objects because an object is a reference)
console.log(set2.has(true));
console.log(set2.has(2+3)); // returns true because set2 has 5 as one of its values

// Delete values:
set1.delete(1000)
console.log((set1));

// Iteration
// for .. of
for(let item of set1) {
  console.log(item);
}

for(let item of set2.keys()) {
  console.log(item);
}

for(let item of set2.values()) {
  console.log(item);
}

// forEach()
set2.forEach((value) => {
  console.log(value);
})

// Convert to array:
const setArr = Array.from(set2)
console.log(setArr);

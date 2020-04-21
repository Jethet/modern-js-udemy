// Create new map with constructor:
myMap = new Map();

// Setting key and value pairs can be chained:
myMap.set("1", "string").set(2, "number").set(true, "boolean");
console.log(myMap.get(true));  // returns: boolean

// Count values in map:
console.log(myMap.size);    // returns: 3

// Iterating over a map: for ... of
for (let element of myMap.keys()){
  console.log(element);    // returns: 1, 2 true
}

for (let value of myMap.values()){
  console.log(value);     // returns: string, number boolean
}

for (let entry of myMap) {
  console.log(entry);   // returns: three arrays with key:value pairs
}

for (let [key, value] of myMap) {
  console.log(`${key} = ${value}`);  // returns: key = value for three key:value pairs
}

// Map has built-in forEach method: uses both value and key!
myMap.forEach( (value, key) => {
  console.log(`${key}: ${value}`);  // returns: three key:value pairs
})

// Convert map to array
// create array of the key:value pairs:
const keyValueArr = Array.from(myMap)
console.log(keyValueArr);

// create array of the values:
const valueArr = Array.from(myMap.values())
console.log(valueArr);

// create array of the keys:
const keyArr = Array.from(myMap.keys())
console.log(keyArr);




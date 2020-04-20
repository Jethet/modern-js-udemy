let re;
re = /hello/;

console.log(re.source);  // this prints re without the slashes

// exec() - If match, returns as result an array or null --> the 
// array contains the pattern, the index where the match starts,
// and the input (the text where the match has been searched for)
const result = re.exec('whatever hello world')
console.log(result);

// test() - returns true or false
const result = re.test('Hello')
console.log(result);

// match() - returns result array or null
re = /hello/i
const str = 'Hello There'
const result = str.match(re)
console.log(result);

// search() - returns index of the first match; if not found it
// returns -1
re = /hello/i
const str = 'Hello There'
result = str.search(re)
console.log(result);

// replace() - returns new string with some or all matches of a 
// pattern
re = /hello/i
const str = 'Hello There'
const newStr = str.replace(re, 'Hi')
console.log(newStr);

// RegEx flags:
// i   case insensitive
// g   general: search for all matches, not just the first one
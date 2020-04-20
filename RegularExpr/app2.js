let re;
// Literal characters:
re = /hello/

// Metacharacter symbols:
re = /^h/i    // ^ = must start with (can be more than one char)

re = /world$/i    // $ = must end with   (same)

re = /^hello$/i   // must begin and end with this char

re = /h.llo/i    // matches any ONE char in place of the dot (.)

re = /h*llo/i    // the * matches any character 0 or more times

re = /gre?a?y/i    // ? indicates previous char is optional 
// (a ? behind options) --> 'gry' will work because e/a are optional

re = /gre?a?y\?/i // escape character to use ? as literal character
// i.e. looking for 'grey?' or 'gray?', including the ? in the string

// Character sets using brackets: []
re = /gr[ae]y/i   // char on index of set has to match char in set []
re = /gr[^ae]y/i  // with ^ inside brackets, those chars are excluded:
// anything but not a or e should be matched - does not mean 'start with'
re = /[A-Z]ray/   // any uppercase char from A to Z; a-z for lowercase
re = /[A-Za-z]ray/ // Match any letter and any case letter
re = /[0-9]ray/   // Match any digit

// Curly braces: quantifiers {}
re = /Hel{2}o/i   // Quantifier AFTER char to match: this matches two l chars
re = /Hel{2,4}o/i // Match quantity between 2 and 4, i.e. 5 x l does not match
re = /Hel{2,}o/i  // Quantity at least 2, or more

// Parenthesis: for grouping () (usually with numbers)
re = /([0-9]x){3}/ // this will match number + x and then three times (not 3 x char)

// Shorthand character classes
re = /\w/     // word char: alphanumeric (any char, num, or _)
re = /\w+/    // looks at one or more word char
re = /\W/     // non-word char: no char, no _ (does match , space, etc.)
re = /\d/     // matches any digit (0 to 9)
re = /\d+/    // matches any digit 0 or more times
re = /\D/     // matches any non-digit
re = /\s/     // matches whitespace char
re = /\S/     // matches non-whitspace char
re = /Hell\b/i  // matches the entire word but not inside another word

// Assertions (comparable to conditionals)
re = /x(?=y)/ // matches x ONLY if it is followed by y: condition
re = /x(?!y)/ // matches x only if NOT followed by y


// String to be matched
const str =  'Nextyt';
// Log results
const result = re.exec(str)
console.log(result);


function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matches ${re.source}`);  // 'source' prints without slashes
  } else {
    console.log(`${str} does not match ${re.source}`);
  }
}

reTest(re, str)
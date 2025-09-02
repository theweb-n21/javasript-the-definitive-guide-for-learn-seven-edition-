const obj = { a: 1, b: 2, c: 3 };
console.log('a' in obj); // true
/**4.9.3 The in Operator
 The in operator expects a left-side operand that is a string, symbol, or
 value that can be converted to a string. It expects a right-side operand
 that is an object. It evaluates to true if the left-side value is the name
 of a property of the right-side object. For example:
 let point = {x: 1, y: 1};  // Define an object
 "x" in point               
// => true: object has property 
named "x"
 "z" in point               
property.
 "toString" in point        
toString method
 let data = [7,8,9];        
(indices) 0, 1, and 2
 "0" in data                
"0"
 // => false: object has no "z" 
// => true: object inherits 
// An array with elements 
// => true: array has an element 
1 in data                  // => true: numbers are converted 
to strings
 3 in data                  // => false: no element 3 */
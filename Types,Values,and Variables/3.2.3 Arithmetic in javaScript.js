console.log(NaN === NaN); // false
const notANumber = NaN;
console.log(Number.isNaN(notANumber)); // true

/*3.2.3 Arithmetic in JavaScript
 JavaScript programs work with numbers using the arithmetic operators
 . that the language provides. These include + for addition, - for
 subtraction, * for multiplication, / for division, and % for modulo
 (remainder after division). ES2016 adds ** for exponentiation. Full
 details on these and other operators can be found in Chapter 4.
 In addition to these basic arithmetic operators, JavaScript supports
 more complex mathematical operations through a set of functions and
 constants defined as properties of the Math object:
 Math.pow(2,53)           // => 9007199254740992: 2 to the 
power 53
 Math.round(.6)           // => 1.0: round to the nearest 
integer
 Math.ceil(.6)            // => 1.0: round up to an integer
 Math.floor(.6)           // => 0.0: round down to an integer
 Math.abs(-5)             // => 5: absolute value
 Math.max(x,y,z)          // Return the largest argument
 Math.min(x,y,z)          // Return the smallest argument
 Math.random()            // Pseudo-random number x where 0 <= 
x < 1.0
 Math.PI                  // π: circumference of a circle / 
diameter
 Math.E                   // e: The base of the natural 
logarithm
 Math.sqrt(3)             // => 3**0.5: the square root of 3
 Math.pow(3, 1/3)         // => 3**(1/3): the cube root of 3
 Math.sin(0)              // Trigonometry: also Math.cos, 
Math.atan, etc.
 Math.log(10)             // Natural logarithm of 10
 Math.log(100)/Math.LN10  // Base 10 logarithm of 100
 Math.log(512)/Math.LN2   // Base 2 logarithm of 512
 Math.exp(3)              // Math.E cubed
ES6 defines more functions on the Math object:
 Math.cbrt(27)    
// => 3: cube root
 Math.hypot(3, 4) // => 5: square root of sum of squares of 
all arguments
 Math.log10(100)  // => 2: Base-10 logarithm
 Math.log2(1024)  // => 10: Base-2 logarithm
 Math.log1p(x)    
// Natural log of (1+x); accurate for very 
small x
 Math.expm1(x)    
Math.log1p()
 Math.sign(x)     
Math.tanh()
 // Math.exp(x)-1; the inverse of 
// -1, 0, or 1 for arguments <, ==, or > 0
 Math.imul(2,3)   // => 6: optimized multiplication of 32-bit 
integers
 Math.clz32(0xf)  // => 28: number of leading zero bits in a 
32-bit integer
 Math.trunc(3.9)  // => 3: convert to an integer by truncating 
fractional part
 Math.fround(x)   // Round to nearest 32-bit float number
 Math.sinh(x)     
// Hyperbolic sine. Also Math.cosh(), 
Math.asinh(x)    
Math.atanh()
 // Hyperbolic arcsine. Also Math.acosh(), 
Arithmetic in JavaScript does not raise errors in cases of overflow,
 underflow, or division by zero. When the result of a numeric operation
 is larger than the largest representable number (overflow), the result is
 a special infinity value, Infinity. Similarly, when the absolute
 value of a negative value becomes larger than the absolute value of the
 largest representable negative number, the result is negative infinity, 
Infinity. The infinite values behave as you would expect: adding,
 subtracting, multiplying, or dividing them by anything results in an
 infinite value (possibly with the sign reversed).
 Underflow occurs when the result of a numeric operation is closer to
zero than the smallest representable number. In this case, JavaScript
 returns 0. If underflow occurs from a negative number, JavaScript
 returns a special value known as “negative zero.” This value is almost
 completely indistinguishable from regular zero and JavaScript
 programmers rarely need to detect it.
 Division by zero is not an error in JavaScript: it simply returns infinity
 or negative infinity. There is one exception, however: zero divided by
 zero does not have a well-defined value, and the result of this operation
 is the special not-a-number value, NaN. NaN also arises if you attempt
 to divide infinity by infinity, take the square root of a negative number,
 or use arithmetic operators with non-numeric operands that cannot be
 converted to numbers.
 JavaScript predefines global constants Infinity and NaN to hold the
 positive infinity and not-a-number value, and these values are also
 available as properties of the Number object:
 Infinity                    // A positive number too big to 
represent
 Number.POSITIVE_INFINITY    // Same value
 1/0                         // => Infinity
 Number.MAX_VALUE * 2        // => Infinity; overflow-Infinity                   // A negative number too big to 
represent
 Number.NEGATIVE_INFINITY    // The same value-1/0                        // => -Infinity-Number.MAX_VALUE * 2       // => -Infinity
 NaN                         // The not-a-number value
 Number.NaN                  // The same value, written 
another way
 0/0                         // => NaN
 Infinity/Infinity           // => NaN
Number.MIN_VALUE/2          // => 0: underflow-Number.MIN_VALUE/2         // => -0: negative zero-1/Infinity                 // -> -0: also negative 0-0
 // The following Number properties are defined in ES6
 Number.parseInt()       // Same as the global parseInt() 
function
 Number.parseFloat()     // Same as the global parseFloat() 
function
 Number.isNaN(x)         // Is x the NaN value?
 Number.isFinite(x)      // Is x a number and finite?
 Number.isInteger(x)     // Is x an integer?
 Number.isSafeInteger(x) // Is x an integer -(2**53) < x < 
2**53?
 Number.MIN_SAFE_INTEGER // => -(2**53 - 1)
 Number.MAX_SAFE_INTEGER // => 2**53 - 1
 Number.EPSILON          // => 2**-52: smallest difference 
between numbers
 The not-a-number value has one unusual feature in JavaScript: it does
 not compare equal to any other value, including itself. This means that
 you can’t write x === NaN to determine whether the value of a
 variable x is NaN. Instead, you must write x != x or
 Number.isNaN(x). Those expressions will be true if, and only if, x
 has the same value as the global constant NaN.
 The global function isNaN() is similar to Number.isNaN(). It
 returns true if its argument is NaN, or if that argument is a non
numeric value that cannot be converted to a number. The related
 function Number.isFinite() returns true if its argument is a
 number other than NaN, Infinity, or -Infinity. The global
 isFinite() function returns true if its argument is, or can be
 converted to, a finite number.
The negative zero value is also somewhat unusual. It compares equal
 (even using JavaScript’s strict equality test) to positive zero, which
 means that the two values are almost indistinguishable, except when
 used as a divisor:
 let zero = 0;         
let negz = -0;        
zero === negz         
equal
 1/zero === 1/negz     
not equal
 // Regular zero
 // Negative zero
 // => true: zero and negative zero are 
// => false: Infinity and -Infinity are */
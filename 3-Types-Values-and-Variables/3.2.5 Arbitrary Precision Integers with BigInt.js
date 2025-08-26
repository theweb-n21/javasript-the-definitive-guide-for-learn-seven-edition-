/* 3.2.5 Arbitrary Precision Integers with BigInt
 One of the newest features of JavaScript, defined in ES2020, is a new
 numeric type known as BigInt. As of early 2020, it has been
 implemented in Chrome, Firefox, Edge, and Node, and there is an
 implementation in progress in Safari. As the name implies, BigInt is a
 numeric type whose values are integers. The type was added to
 JavaScript mainly to allow the representation of 64-bit integers, which
 are required for compatibility with many other programming languages
and APIs. But BigInt values can have thousands or even millions of
 digits, should you have need to work with numbers that large. (Note,
 however, that BigInt implementations are not suitable for cryptography
 because they do not attempt to prevent timing attacks.)
 BigInt literals are written as a string of digits followed by a lowercase
 letter n. By default, the are in base 10, but you can use the 0b, 0o, and
 0x prefixes for binary, octal, and hexadecimal BigInts:
 1234n                
0b111111n            
0o7777n              
// A not-so-big BigInt literal
 // A binary BigInt
 // An octal BigInt
 0x8000000000000000n  // => 2n**63n: A 64-bit integer
 You can use BigInt() as a function for converting regular
 JavaScript numbers or strings to BigInt values:
 BigInt(Number.MAX_SAFE_INTEGER)     
// => 9007199254740991n
 let string = "1" + "0".repeat(100); // 1 followed by 100 
zeros.
 BigInt(string)                      
googol
 // => 10n**100n: one 
Arithmetic with BigInt values works like arithmetic with regular
 JavaScript numbers, except that division drops any remainder and
 rounds down (toward zero):
 1000n + 2000n  // => 3000n
 3000n - 2000n  // => 1000n
 2000n * 3000n  // => 6000000n
 3000n / 997n   // => 3n: the quotient is 3
 3000n % 997n   // => 9n: and the remainder is 9
 (2n ** 131071n) - 1n  // A Mersenne prime with 39457 decimal 
digits
Although the standard +, -, *, /, %, and ** operators work with
 BigInt, it is important to understand that you may not mix operands of
 type BigInt with regular number operands. This may seem confusing at
 first, but there is a good reason for it. If one numeric type was more
 general than the other, it would be easy to define arithmetic on mixed
 operands to simply return a value of the more general type. But neither
 type is more general than the other: BigInt can represent extraordinarily
 large values, making it more general than regular numbers. But BigInt
 can only represent integers, making the regular JavaScript number type
 more general. There is no way around this problem, so JavaScript
 sidesteps it by simply not allowing mixed operands to the arithmetic
 operators.
 Comparison operators, by contrast, do work with mixed numeric types
 (but see 
§3.9.1 for more about the difference between == and ===):
 1 < 2n     
2 > 1n     
// => true
 // => true
 0 == 0n    // => true
 0 === 0n   // => false: the === checks for type equality as 
well
 The bitwise operators (described in 
§4.8.3) generally work with BigInt
 operands. None of the functions of the Math object accept BigInt
 operands, however.*/
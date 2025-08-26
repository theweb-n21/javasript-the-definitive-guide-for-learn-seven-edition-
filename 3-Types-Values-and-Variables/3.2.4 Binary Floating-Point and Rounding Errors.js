/*3.2.4 Binary Floating-Point and Rounding Errors
 There are infinitely many real numbers, but only a finite number of
 them (18,437,736,874,454,810,627, to be exact) can be represented
 exactly by the JavaScript floating-point format. This means that when
 you’re working with real numbers in JavaScript, the representation of
 the number will often be an approximation of the actual number.
 The IEEE-754 floating-point representation used by JavaScript (and
 just about every other modern programming language) is a binary
 representation, which can exactly represent fractions like 1/2, 1/8,
 and 1/1024. Unfortunately, the fractions we use most commonly
 (especially when performing financial calculations) are decimal
 fractions: 1/10, 1/100, and so on. Binary floating-point
 representations cannot exactly represent numbers as simple as 0.1.
 JavaScript numbers have plenty of precision and can approximate 0.1
 very closely. But the fact that this number cannot be represented
 exactly can lead to problems. Consider this code:
let x = .3 - .2;    // thirty cents minus 20 cents
 let y = .2 - .1;    // twenty cents minus 10 cents
 x === y             
// => false: the two values are not the 
same!
 x === .1            
y === .1            
// => false: .3-.2 is not equal to .1
 // => true: .2-.1 is equal to .1
 Because of rounding error, the difference between the approximations
 of .3 and .2 is not exactly the same as the difference between the
 approximations of .2 and .1. It is important to understand that this
 problem is not specific to JavaScript: it affects any programming
 language that uses binary floating-point numbers. Also, note that the
 values x and y in the code shown here are very close to each other and
 to the correct value. The computed values are adequate for almost any
 purpose; the problem only arises when we attempt to compare values
 for equality.
 If these floating-point approximations are problematic for your
 programs, consider using scaled integers. For example, you might
 manipulate monetary values as integer cents rather than fractional
 dollars */
/* 3.4 Boolean Values
 // => true: a match exists
 // => 9: position of first 
// => ["1", "2", "3"]: array 
// => "testing: #, #, #"
 // => ["","1","2","3"]: 
A boolean value represents truth or falsehood, on or off, yes or no.
 There are only two possible values of this type. The reserved words
 true and false evaluate to these two values.
 Boolean values are generally the result of comparisons you make in
 your JavaScript programs. For example:
 a === 4
 This code tests to see whether the value of the variable a is equal to the
 number 4. If it is, the result of this comparison is the boolean value
 true. If a is not equal to 4, the result of the comparison is false.
 Boolean values are commonly used in JavaScript control structures.
 For example, the if/else statement in JavaScript performs one
 action if a boolean value is true and another action if the value is
 false. You usually combine a comparison that creates a boolean
 value directly with a statement that uses it. The result looks like this:
 if (a === 4) {
 b = b + 1;
} else {
 a = a + 1;
 }
 This code checks whether a equals 4. If so, it adds 1 to b; otherwise, it
 adds 1 to a.
 As we’ll discuss in 
§3.9, any JavaScript value can be converted to a
 boolean value. The following values convert to, and therefore work
 like, false:
 undefined
 null
 0-0
 NaN
 ""  // the empty string
 All other values, including all objects (and arrays) convert to, and work
 like, true. false, and the six values that convert to it, are sometimes
 called falsy values, and all other values are called truthy. Any time
 JavaScript expects a boolean value, a falsy value works like false
 and a truthy value works like true.
 As an example, suppose that the variable o either holds an object or the
 value null. You can test explicitly to see if o is non-null with an if
 statement like this:
 if (o !== null) ...
 The not-equal operator !== compares o to null and evaluates to
 either true or false. But you can omit the comparison and instead
rely on the fact that null is falsy and objects are truthy:
 if (o) ...
 In the first case, the body of the if will be executed only if o is not
 null. The second case is less strict: it will execute the body of the if
 only if o is not false or any falsy value (such as null or
 undefined). Which if statement is appropriate for your program
 really depends on what values you expect to be assigned to o. If you
 need to distinguish null from 0 and "", then you should use an
 explicit comparison.
 Boolean values have a toString() method that you can use to
 convert them to the strings “true” or “false”, but they do not have any
 other useful methods. Despite the trivial API, there are three important
 boolean operators.
 The && operator performs the Boolean AND operation. It evaluates to
 a truthy value if and only if both of its operands are truthy; it evaluates
 to a falsy value otherwise. The || operator is the Boolean OR
 operation: it evaluates to a truthy value if either one (or both) of its
 operands is truthy and evaluates to a falsy value if both operands are
 falsy. Finally, the unary ! operator performs the Boolean NOT
 operation: it evaluates to true if its operand is falsy and evaluates to
 false if its operand is truthy. For example:
 if ((x === 0 && y === 0) || !(z === 0)) {
 // x and y are both zero or z is non-zero
 }
Full details on these operators are in 
§4.10. */
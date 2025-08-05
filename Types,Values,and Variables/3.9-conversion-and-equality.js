/** 3.9.1 Conversions and Equality
JavaScript has two operators that test whether two values are equal.
 The “strict equality operator,” ===, does not consider its operands to
 be equal if they are not of the same type, and this is almost always the
 right operator to use when coding. But because JavaScript is so flexible
 with type conversions, it also defines the == operator with a flexible
 definition of equality. All of the following comparisons are true, for
 example:
 null == undefined // => true: These two values are treated as 
equal.
 "0" == 0          
// => true: String converts to a number 
before comparing.
 0 == false        
before comparing.
 "0" == false      
// => true: Boolean converts to number 
// => true: Both operands convert to 0 
before comparing!
 §4.9.1 explains exactly what conversions are performed by the ==
 operator in order to determine whether two values should be
 considered equal.
 Keep in mind that convertibility of one value to another does not imply
 equality of those two values. If undefined is used where a boolean
 value is expected, for example, it will convert to false. But this does
 not mean that undefined == false. JavaScript operators and
 statements expect values of various types and perform conversions to
 those types. The if statement converts undefined to false, but
 the == operator never attempts to convert its operands to booleans. */
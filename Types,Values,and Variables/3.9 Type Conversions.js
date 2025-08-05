let x = 2 - true;
console.log(x); // => 1

/** 3.9 Type Conversions
 JavaScript is very flexible about the types of values it requires. We’ve
 seen this for booleans: when JavaScript expects a boolean value, you
 may supply a value of any type, and JavaScript will convert it as
 needed. Some values (“truthy” values) convert to true and others
 (“falsy” values) convert to false. The same is true for other types: if
 JavaScript wants a string, it will convert whatever value you give it to a
 string. If JavaScript wants a number, it will try to convert the value you
give it to a number (or to NaN if it cannot perform a meaningful
 conversion).
 Some examples:
 10 + " objects"     
to a string
 "7" * "4"           
// => "10 objects":  Number 10 converts 
// => 28: both strings convert to numbers
 let n = 1 - "x";    // n == NaN; string "x" can't convert to 
a number
 n + " objects"      
// => "NaN objects": NaN converts to 
string "NaN"
 Table 3-2 summarizes how values convert from one type to another in
 JavaScript. Bold entries in the table highlight conversions that you may
 find surprising. Empty cells indicate that no conversion is necessary
 and none is performed.
 Table 3-2. JavaScript type conversions
 Value
 to String
 undefined
 to Number to Boolean
 "undefined" NaN
 false
 null
 "null"
 0
 true
 "true"
 1
 false
 "false"
 false
 0
 "" (empty string)
 "1.2" (nonempty, numeric)
 0
 false
 1.2
 "one" (nonempty, non-numeric)
 NaN
 0
 "0"
 true
 true
 false
-0
 "0"
 false
 1 (finite, non-zero)
 "1"
 true
 Infinity
 "Infinity"-Infinity
 true
 "-Infinity"
 NaN
 "NaN"
 {} (any object) see 
true
 false
 §3.9.3 see 
§3.9.3
 [] (empty array)
 ""
 0
 [9] (one numeric element)
 "9"
 true
 true
 9
 ['a'] (any other array)
 use join() method
 NaN
 function(){} (any function) see 
true
 true
 §3.9.3
 NaN
 true
 The primitive-to-primitive conversions shown in the table are relatively
 straightforward. Conversion to boolean was already discussed in 
§3.4.
 Conversion to strings is well defined for all primitive values.
 Conversion to numbers is just a little trickier. Strings that can be parsed
 as numbers convert to those numbers. Leading and trailing spaces are
 allowed, but any leading or trailing nonspace characters that are not
 part of a numeric literal cause the string-to-number conversion to
 produce NaN. Some numeric conversions may seem surprising: true
 converts to 1, and false and the empty string convert to 0.
 Object-to-primitive conversion is somewhat more complicated, and it
 is the subject of 
§3.9.3 */
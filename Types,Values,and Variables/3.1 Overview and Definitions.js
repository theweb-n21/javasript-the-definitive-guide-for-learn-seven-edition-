//liberally = উদারভাবে

/* 3.1 Overview and Definitions
 JavaScript types can be divided into two categories: primitive types and
 object types. JavaScript’s primitive types include numbers, strings of
 text (known as strings), and Boolean truth values (known as booleans).
 A significant portion of this chapter is dedicated to a detailed
 explanation of the numeric (
 §3.2) and string (
 §3.3) types in JavaScript.
 Booleans are covered in 
§3.4.
 The special JavaScript values null and undefined are primitive
values, but they are not numbers, strings, or booleans. Each value is
 typically considered to be the sole member of its own special type. 
§3.5
 has more about null and undefined. ES6 adds a new special
purpose type, known as Symbol, that enables the definition of language
 extensions without harming backward compatibility. Symbols are
 covered briefly in 
§3.6.
 Any JavaScript value that is not a number, a string, a boolean, a
 symbol, null, or undefined is an object. An object (that is, a
 member of the type object) is a collection of properties where each
 property has a name and a value (either a primitive value or another
 object). One very special object, the global object, is covered in 
but more general and more detailed coverage of objects is in 
§3.7,
 Chapter 6.
 An ordinary JavaScript object is an unordered collection of named
 values. The language also defines a special kind of object, known as an
 array, that represents an ordered collection of numbered values. The
 JavaScript language includes special syntax for working with arrays,
 and arrays have some special behavior that distinguishes them from
 ordinary objects. Arrays are the subject of 
Chapter 7.
 In addition to basic objects and arrays, JavaScript defines a number of
 other useful object types. A Set object represents a set of values. A
 Map object represents a mapping from keys to values. Various “typed
 array” types facilitate operations on arrays of bytes and other binary
 data. The RegExp type represents textual patterns and enables
 sophisticated matching, searching, and replacing operations on strings.
 The Date type represents dates and times and supports rudimentary
 date arithmetic. Error and its subtypes represent errors that can arise
when executing JavaScript code. All of these types are covered in
 Chapter 11.
 JavaScript differs from more static languages in that functions and
 classes are not just part of the language syntax: they are themselves
 values that can be manipulated by JavaScript programs. Like any
 JavaScript value that is not a primitive value, functions and classes are
 a specialized kind of object. They are covered in detail in Chapters 
and 
9.
 8
 The JavaScript interpreter performs automatic garbage collection for
 memory management. This means that a JavaScript programmer
 generally does not need to worry about destruction or deallocation of
 objects or other values. When a value is no longer reachable—when a
 program no longer has any way to refer to it—the interpreter knows it
 can never be used again and automatically reclaims the memory it was
 occupying. (JavaScript programmers do sometimes need to take care to
 ensure that values do not inadvertently remain reachable—and
 therefore nonreclaimable—longer than necessary.)
 JavaScript supports an object-oriented programming style. Loosely,
 this means that rather than having globally defined functions to operate
 on values of various types, the types themselves define methods for
 working with values. To sort the elements of an array a, for example,
 we don’t pass a to a sort() function. Instead, we invoke the
 sort() method of a:
 a.sort();       
// The object-oriented version of sort(a).
Method definition is covered in 
Chapter 9. Technically, it is only
 JavaScript objects that have methods. But numbers, strings, boolean,
 and symbol values behave as if they have methods. In JavaScript,
 null and undefined are the only values that methods cannot be
 invoked on.
 JavaScript’s object types are mutable and its primitive types are
 immutable. A value of a mutable type can change: a JavaScript
 program can change the values of object properties and array elements.
 Numbers, booleans, symbols, null, and undefined are immutable
 —it doesn’t even make sense to talk about changing the value of a
 number, for example. Strings can be thought of as arrays of characters,
 and you might expect them to be mutable. In JavaScript, however,
 strings are immutable: you can access the text at any index of a string,
 but JavaScript provides no way to alter the text of an existing string.
 The differences between mutable and immutable values are explored
 further in 
§3.8.
 JavaScript liberally converts values from one type to another. If a
 program expects a string, for example, and you give it a number, it will
 automatically convert the number to a string for you. And if you use a
 non-boolean value where a boolean is expected, JavaScript will convert
 accordingly. The rules for value conversion are explained in 
§3.9.
 JavaScript’s liberal value conversion rules affect its definition of
 equality, and the == equality operator performs type conversions as
 described in 
§3.9.1. (In practice, however, the == equality operator is
 deprecated in favor of the strict equality operator ===, which does no
 type conversions. See 
§4.9.1 for more about both operators.)
Constants and variables allow you to use names to refer to values in
 your programs. Constants are declared with const and variables are
 declared with let (or with var in older JavaScript code). JavaScript
 constants and variables are untyped: declarations do not specify what
 kind of values will be assigned. Variable declaration and assignment
 are covered in 
§3.10.
 As you can see from this long introduction, this is a wide-ranging
 chapter that explains many fundamental details about how data is
 represented and manipulated in JavaScript. We’ll begin by diving right
 in to the details of JavaScript numbers and text.*/
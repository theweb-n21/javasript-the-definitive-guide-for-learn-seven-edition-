/* 3.3 Text
 The JavaScript type for representing text is the string. A string is an
 immutable ordered sequence of 16-bit values, each of which typically
 represents a Unicode character. The length of a string is the number of
 16-bit values it contains. JavaScript’s strings (and its arrays) use zero
based indexing: the first 16-bit value is at position 0, the second at
 position 1, and so on. The empty string is the string of length 0.
 JavaScript does not have a special type that represents a single element
 of a string. To represent a single 16-bit value, simply use a string that
 has a length of 1.
 CHARACTERS, CODEPOINTS, AND JAVASCRIPT STRINGS
 JavaScript uses the UTF-16 encoding of the Unicode character set, and JavaScript strings are
 sequences of unsigned 16-bit values. The most commonly used Unicode characters (those from the
 “basic multilingual plane”) have codepoints that fit in 16 bits and can be represented by one element
 of a string. Unicode characters whose codepoints do not fit in 16 bits are encoded using the rules of
UTF-16 as a sequence (known as a “surrogate pair”) of two 16-bit values. This means that a
 JavaScript string of length 2 (two 16-bit values) might represent only a single Unicode character:
 let euro = "€";
 let love = "❤";
 euro.length   // => 1: this character has one 16-bit element
 love.length   // => 2: UTF-16 encoding of ❤ is "\ud83d\udc99"
 Most string-manipulation methods defined by JavaScript operate on 16-bit values, not characters.
 They do not treat surrogate pairs specially, they perform no normalization of the string, and don’t even
 ensure that a string is well-formed UTF-16.
 In ES6, however, strings are iterable, and if you use the for/of loop or ... operator with a string, it
 will iterate the actual characters of the string, not the 16-bit values */
/* 3.3.5 Pattern Matching
 JavaScript defines a datatype known as a regular expression (or
 RegExp) for describing and matching patterns in strings of text.
 RegExps are not one of the fundamental datatypes in JavaScript, but
 they have a literal syntax like numbers and strings do, so they
 sometimes seem like they are fundamental. The grammar of regular
 expression literals is complex and the API they define is nontrivial.
 They are documented in detail in 
§11.3. Because RegExps are
 powerful and commonly used for text processing, however, this section
 provides a brief overview.
 Text between a pair of slashes constitutes a regular expression literal.
 The second slash in the pair can also be followed by one or more
 letters, which modify the meaning of the pattern. For example:
 /^HTML/;             
start of a string
 /[1-9][0-9]*/;       
// Match the letters H T M L at the 
// Match a nonzero digit, followed by 
/*any # of digits
 /\bjavascript\b/i;   // Match "javascript" as a word, case
insensitive
 RegExp objects define a number of useful methods, and strings also
 have methods that accept RegExp arguments. For example:
 let text = "testing: 1, 2, 3";   // Sample text
 let pattern = /\d+/g;            
// Matches all instances of 
one or more digits
pattern.test(text)               
text.search(pattern)             
match
 text.match(pattern)              
of all matches
 text.replace(pattern, "#")       
text.split(/\D+/)        
*/
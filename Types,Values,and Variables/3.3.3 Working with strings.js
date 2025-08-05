/*  3.3.3 Working with Strings
 One of the built-in features of JavaScript is the ability to concatenate
 strings. If you use the + operator with numbers, it adds them. But if
 you use this operator on strings, it joins them by appending the second
 to the first. For example:
 let msg = "Hello, " + "world";   // Produces the string 
"Hello, world"
 let greeting = "Welcome to my blog," + " " + name;
 Strings can be compared with the standard === equality and !==
 inequality operators: two strings are equal if and only if they consist of
 exactly the same sequence of 16-bit values. Strings can also be
 compared with the <, <=, >, and >= operators. String comparison is
 done simply by comparing the 16-bit values. (For more robust locale
aware string comparison and sorting, see 
§11.7.3.)
 To determine the length of a string—the number of 16-bit values it
 contains—use the length property of the string:
 s.length
In addition to this length property, JavaScript provides a rich API for
 working with strings:
 let s = "Hello, world"; // Start with some text.
 // Obtaining portions of a string
 s.substring(1,4)        
characters.
 s.slice(1,4)            
s.slice(-3)             
s.split(", ")           
delimiter string
 // Searching a string
 s.indexOf("l")          
s.indexOf("l", 3)       
after 3
 s.indexOf("zz")         
substring "zz"
 s.lastIndexOf("l")      
// => "ell": the 2nd, 3rd, and 4th 
// => "ell": same thing
 // => "rld": last 3 characters
 // => ["Hello", "world"]: split at 
// => 2: position of first letter l
 // => 3: position of first "l" at or 
// => -1: s does not include the 
// => 10: position of last letter l
 // Boolean searching functions in ES6 and later
 s.startsWith("Hell")    
these
 s.endsWith("!")         
s.includes("or")        
// => true: the string starts with 
// => false: s does not end with that
 // => true: s includes substring "or"
 // Creating modified versions of a string
 s.replace("llo", "ya")  // => "Heya, world"
 s.toLowerCase()         
// => "hello, world"
 s.toUpperCase()         
s.normalize()           
s.normalize("NFD")      
"NFKD"
 // => "HELLO, WORLD"
 // Unicode NFC normalization: ES6
 // NFD normalization. Also "NFKC", 
// Inspecting individual (16-bit) characters of a string
 s.charAt(0)             
s.charAt(s.length-1)    
s.charCodeAt(0)         
specified position
 s.codePointAt(0)        
// => "H": the first character
 // => "d": the last character
 // => 72: 16-bit number at the 
// => 72: ES6, works for codepoints > 
16 bits
 // String padding functions in ES2017
 "x".padStart(3)         
to a length of 3
 "x".padEnd(3)           
to a length of 3
 "x".padStart(3, "*")    
a length of 3
 "x".padEnd(3, "-")      
to a length of 3
 // => "  x": add spaces on the left 
// => "x  ": add spaces on the right 
// => "**x": add stars on the left to 
// => "x--": add dashes on the right 
// Space trimming functions. trim() is ES5; others ES2019
 " test ".trim()         
and end
 " test ".trimStart()    
Also trimLeft
 " test ".trimEnd()      
right. Also trimRight
 // => "test": remove spaces at start 
// => "test ": remove spaces on left. 
// => " test": remove spaces at 
// Miscellaneous string methods
 s.concat("!")           
operator instead
 "<>".repeat(5)          
copies. ES6
 // => "Hello, world!": just use + 
// => "<><><><><>": concatenate n 
Remember that strings are immutable in JavaScript. Methods like
 replace() and toUpperCase() return new strings: they do not
 modify the string on which they are invoked.
 Strings can also be treated like read-only arrays, and you can access
 individual characters (16-bit values) from a string using square
 brackets instead of the charAt() method:
 let s = "hello, world";
 s[0]                  
// => "h"
 s[s.length-1]         
// => "d'*/
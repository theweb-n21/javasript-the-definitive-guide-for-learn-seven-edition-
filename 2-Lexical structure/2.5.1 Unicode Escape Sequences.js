/* 2.5.1 Unicode Escape Sequences
 Some computer hardware and software cannot display, input, or
 correctly process the full set of Unicode characters. To support
 programmers and systems using older technology, JavaScript defines
 escape sequences that allow us to write Unicode characters using only
 ASCII characters. These Unicode escapes begin with the characters \u
 and are either followed by exactly four hexadecimal digits (using
 uppercase or lowercase letters A–F) or by one to six hexadecimal digits
 enclosed within curly braces. These Unicode escapes may appear in
 JavaScript string literals, regular expression literals, and identifiers (but
not in language keywords). The Unicode escape for the character “é,”
 for example, is \u00E9; here are three different ways to write a
 variable name that includes this character:
 let café = 1; // Define a variable using a Unicode character
 caf\u00e9     
// => 1; access the variable using an escape 
sequence
 caf\u{E9}     
sequence
 // => 1; another form of the same escape 
Early versions of JavaScript only supported the four-digit escape
 sequence. The version with curly braces was introduced in ES6 to
 better support Unicode codepoints that require more than 16 bits, such
 as emoji:
 console.log("\u{1F600}");  // Prints a smiley face emoji
 Unicode escapes may also appear in comments, but since comments
 are ignored, they are simply treated as ASCII characters in that context
 and not interpreted as Unicode*/
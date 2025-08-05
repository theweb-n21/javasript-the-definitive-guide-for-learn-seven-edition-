/* 3.3.2 Escape Sequences in String Literals
 The backslash character (\) has a special purpose in JavaScript strings.
 Combined with the character that follows it, it represents a character
 that is not otherwise representable within the string. For example, \n is
 an escape sequence that represents a newline character.
 Another example, mentioned earlier, is the \' escape, which represents
 the single quote (or apostrophe) character. This escape sequence is
 useful when you need to include an apostrophe in a string literal that is
 contained within single quotes. You can see why these are called
 escape sequences: the backslash allows you to escape from the usual
 interpretation of the single-quote character. Instead of using it to mark
 the end of the string, you use it as an apostrophe:
 'You\'re right, it can\'t be a quote'
 Table 3-1 lists the JavaScript escape sequences and the characters they
 represent. Three escape sequences are generic and can be used to
 represent any character by specifying its Unicode character code as a
 hexadecimal number. For example, the sequence \xA9 represents the
 copyright symbol, which has the Unicode encoding given by the
hexadecimal number A9. Similarly, the \u escape represents an
 arbitrary Unicode character specified by four hexadecimal digits or one
 to five digits when the digits are enclosed in curly braces: \u03c0
 represents the character π, for example, and \u{1f600} represents
 the “grinning face” emoji.
 Table 3-1. JavaScript escape sequences
 Sequ
 ence Character represented
 \0
 The NUL character (\u0000)
 \b
 Backspace (\u0008)
 \t
 Horizontal tab (\u0009)
 \n
 Newline (\u000A)
 \v
 Vertical tab (\u000B)
 \f
 Form feed (\u000C)
 \r
 Carriage return (\u000D)
 \"
 Double quote (\u0022)
 \'
 Apostrophe or single quote (\u0027)
 \\
 Backslash (\u005C)
 \xnn
 The Unicode character specified by the two hexadecimal digits nn
 \unn
 nn
 The Unicode character specified by the four hexadecimal digits nnnn
 \u{n
 }
 The Unicode character specified by the codepoint n, where n is one to six 
hexadecimal digits between 0 and 10FFFF (ES6)
If the \ character precedes any character other than those shown in
 Table 3-1, the backslash is simply ignored (although future versions of
 the language may, of course, define new escape sequences). For
 example, \# is the same as #. Finally, as noted earlier, ES5 allows a
 backslash before a line break to break a string literal across multiple
 lines */
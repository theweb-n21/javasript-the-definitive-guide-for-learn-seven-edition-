/*3.3.4 Template Literals
 In ES6 and later, string literals can be delimited with backticks:
 let s = `hello world`;
 This is more than just another string literal syntax, however, because
 these template literals can include arbitrary JavaScript expressions.
 The final value of a string literal in backticks is computed by
 evaluating any included expressions, converting the values of those
 expressions to strings and combining those computed strings with the
 literal characters within the backticks:
 let name = "Bill";
 let greeting = `Hello ${ name }.`;  // greeting == "Hello 
Bill."
 Everything between the ${ and the matching } is interpreted as a
 JavaScript expression. Everything outside the curly braces is normal
 string literal text. The expression inside the braces is evaluated and
 then converted to a string and inserted into the template, replacing the
 dollar sign, the curly braces, and everything in between them.
 A template literal may include any number of expressions. It can use
 any of the escape characters that normal strings can, and it can span
 any number of lines, with no special escaping required. The following
 template literal includes four JavaScript expressions, a Unicode escape
 sequence, and at least four newlines (the expression values may include
 newlines as well):
 let errorMessage = `\
 \u2718 Test failure at ${filename}:${linenumber}:
 ${exception.message}
Stack trace:
 ${exception.stack}
 `;
 The backslash at the end of the first line here escapes the initial
 newline so that the resulting string begins with the Unicode ✘
 character (\u2718) rather than a newline.
 TAGGED TEMPLATE LITERALS
 A powerful but less commonly used feature of template literals is that,
 if a function name (or “tag”) comes right before the opening backtick,
 then the text and the values of the expressions within the template
 literal are passed to the function. The value of this “tagged template
 literal” is the return value of the function. This could be used, for
 example, to apply HTML or SQL escaping to the values before
 substituting them into the text.
 ES6 has one built-in tag function: String.raw(). It returns the text
 within backticks without any processing of backslash escapes:
 `\n`.length            
// => 1: the string has a single 
newline character
 String.raw`\n`.length  // => 2: a backslash character and the 
letter n
 Note that even though the tag portion of a tagged template literal is a
 function, there are no parentheses used in its invocation. In this very
 specific case, the backtick characters replace the open and close
 parentheses.
 The ability to define your own template tag functions is a powerful
feature of JavaScript. These functions do not need to return strings, and
 they can be used like constructors, as if defining a new literal syntax
 for the language. We’ll see an example in 
§14.5 */
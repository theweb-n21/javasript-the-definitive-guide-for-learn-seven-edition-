/* 3.3.1 String Literals
 To include a string in a JavaScript program, simply enclose the
 characters of the string within a matched pair of single or double
 quotes or backticks (' or " or `). Double-quote characters and
 backticks may be contained within strings delimited by single-quote
 characters, and similarly for strings delimited by double quotes and
 backticks. Here are examples of string literals:
 ""  // The empty string: it has zero characters
 'testing'
 "3.14"
 'name="myform"'
 "Wouldn't you prefer O'Reilly's book?"
 "τ is the ratio of a circle's circumference to its radius"
 `"She said 'hi'", he said.`
 Strings delimited with backticks are a feature of ES6, and allow
 JavaScript expressions to be embedded within (or interpolated into) the
 string literal. This expression interpolation syntax is covered in 
§3.3.4.
 The original versions of JavaScript required string literals to be written
on a single line, and it is common to see JavaScript code that creates
 long strings by concatenating single-line strings with the + operator. As
 of ES5, however, you can break a string literal across multiple lines by
 ending each line but the last with a backslash (\). Neither the backslash
 nor the line terminator that follow it are part of the string literal. If you
 need to include a newline character in a single-quoted or double-quoted
 string literal, use the character sequence \n (documented in the next
 section). The ES6 backtick syntax allows strings to be broken across
 multiple lines, and in this case, the line terminators are part of the
 string literal:
 // A string representing 2 lines written on one line:
 'two\nlines'
 // A one-line string written on 3 lines:
 "one\
 long\
 line"
 // A two-line string written on two lines:
 `the newline character at the end of this line
 is included literally in this string`
 Note that when you use single quotes to delimit your strings, you must
 be careful with English contractions and possessives, such as can’t and
 O’Reilly’s. Since the apostrophe is the same as the single-quote
 character, you must use the backslash character (\) to “escape” any
 apostrophes that appear in single-quoted strings (escapes are explained
 in the next section).
 In client-side JavaScript programming, JavaScript code may contain
 strings of HTML code, and HTML code may contain strings of
 JavaScript code. Like JavaScript, HTML uses either single or double
quotes to delimit its strings. Thus, when combining JavaScript and
 HTML, it is a good idea to use one style of quotes for JavaScript and
 the other style for HTML. In the following example, the string “Thank
 you” is single-quoted within a JavaScript expression, which is then
 double-quoted within an HTML event-handler attribute:
 <button onclick="alert('Thank you')">Click Me</button>*/
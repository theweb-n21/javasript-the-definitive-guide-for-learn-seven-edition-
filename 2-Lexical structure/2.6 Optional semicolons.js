/* 2.6 Optional Semicolons
 Like many programming languages, JavaScript uses the semicolon (;)
 to separate statements (see 
Chapter 5) from one another. This is
 important for making the meaning of your code clear: without a
 separator, the end of one statement might appear to be the beginning of
 the next, or vice versa. In JavaScript, you can usually omit the
 semicolon between two statements if those statements are written on
 separate lines. (You can also omit a semicolon at the end of a program
 or if the next token in the program is a closing curly brace: }.) Many
 JavaScript programmers (and the code in this book) use semicolons to
 explicitly mark the ends of statements, even where they are not
 required. Another style is to omit semicolons whenever possible, using
 them only in the few situations that require them. Whichever style you
choose, there are a few details you should understand about optional
 semicolons in JavaScript.
 Consider the following code. Since the two statements appear on
 separate lines, the first semicolon could be omitted:
 a = 3;
 b = 4;
 Written as follows, however, the first semicolon is required:
 a = 3; b = 4;
 Note that JavaScript does not treat every line break as a semicolon: it
 usually treats line breaks as semicolons only if it can’t parse the code
 without adding an implicit semicolon. More formally (and with three
 exceptions described a bit later), JavaScript treats a line break as a
 semicolon if the next nonspace character cannot be interpreted as a
 continuation of the current statement. Consider the following code:
 let a
 a
 =
 3
 console.log(a)
 JavaScript interprets this code like this:
 let a; a = 3; console.log(a);
 JavaScript does treat the first line break as a semicolon because it
 cannot parse the code let a a without a semicolon. The second a
 could stand alone as the statement a;, but JavaScript does not treat the
second line break as a semicolon because it can continue parsing the
 longer statement a = 3;.
 These statement termination rules lead to some surprising cases. This
 code looks like two separate statements separated with a newline:
 let y = x + f
 (a+b).toString()
 But the parentheses on the second line of code can be interpreted as a
 function invocation of f from the first line, and JavaScript interprets
 the code like this:
 let y = x + f(a+b).toString();
 More likely than not, this is not the interpretation intended by the
 author of the code. In order to work as two separate statements, an
 explicit semicolon is required in this case.
 In general, if a statement begins with (, [, /, +, or -, there is a chance
 that it could be interpreted as a continuation of the statement before.
 Statements beginning with /, +, and - are quite rare in practice, but
 statements beginning with ( and [ are not uncommon at all, at least in
 some styles of JavaScript programming. Some programmers like to put
 a defensive semicolon at the beginning of any such statement so that it
 will continue to work correctly even if the statement before it is
 modified and a previously terminating semicolon removed:
 let x = 0                         
// Semicolon omitted here
 ;[x,x+1,x+2].forEach(console.log) // Defensive ; keeps this 
statement separate
There are three exceptions to the general rule that JavaScript interprets
 line breaks as semicolons when it cannot parse the second line as a
 continuation of the statement on the first line. The first exception
 involves the return, throw, yield, break, and continue
 statements (see 
Chapter 5). These statements often stand alone, but
 they are sometimes followed by an identifier or expression. If a line
 break appears after any of these words (before any other tokens),
 JavaScript will always interpret that line break as a semicolon. For
 example, if you write:
 return
 true;
 JavaScript assumes you meant:
 return; true;
 However, you probably meant:
 return true;
 This means that you must not insert a line break between return,
 break, or continue and the expression that follows the keyword. If
 you do insert a line break, your code is likely to fail in a nonobvious
 way that is difficult to debug.
 The second exception involves the ++ and −− operators (
 §4.8). These
 operators can be prefix operators that appear before an expression or
 postfix operators that appear after an expression. If you want to use
 either of these operators as postfix operators, they must appear on the
same line as the expression they apply to. The third exception involves
 functions defined using concise “arrow” syntax: the => arrow itself
 must appear on the same line as the parameter list. For example, if you*/
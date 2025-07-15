/*
 Chapter 2. Lexical Structure
 The lexical structure of a programming language is the set of
 elementary rules that specifies how you write programs in that
 language. It is the lowest-level syntax of a language: it specifies what
 variable names look like, the delimiter characters for comments, and
 how one program statement is separated from the next, for example.
 This short chapter documents the lexical structure of JavaScript. It
 covers:
 Case sensitivity, spaces, and line breaks
 Comments
 Literals
 Identifiers and reserved words
 Unicode
 Optional semicolons

  2.1 The Text of a JavaScript Program
 JavaScript is a case-sensitive language. This means that language
 keywords, variables, function names, and other identifiers must always
 be typed with a consistent capitalization of letters. The while
 keyword, for example, must be typed “while,” not “While” or
 “WHILE.” Similarly, online, Online, OnLine, and ONLINE are
 four distinct variable names.
JavaScript ignores spaces that appear between tokens in programs. For
 the most part, JavaScript also ignores line breaks (but see 
§2.6 for an
 exception). Because you can use spaces and newlines freely in your
 programs, you can format and indent your programs in a neat and
 consistent way that makes the code easy to read and understand.
 In addition to the regular space character (\u0020), JavaScript also
 recognizes tabs, assorted ASCII control characters, and various
 Unicode space characters as whitespace. JavaScript recognizes
 newlines, carriage returns, and a carriage return/line feed sequence as
 line terminators
*/
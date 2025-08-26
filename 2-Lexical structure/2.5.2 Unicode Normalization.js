/* 2.5.2 Unicode Normalization
 If you use non-ASCII characters in your JavaScript programs, you
 must be aware that Unicode allows more than one way of encoding the
 same character. The string “é,” for example, can be encoded as the
 single Unicode character \u00E9 or as a regular ASCII “e” followed
 by the acute accent combining mark \u0301. These two encodings
 typically look exactly the same when displayed by a text editor, but
 they have different binary encodings, meaning that they are considered
 different by JavaScript, which can lead to very confusing programs:
const café = 1;  // This constant is named "caf\u{e9}"
 const café = 2;  // This constant is different: "cafe\u{301}"
 café  // => 1: this constant has one value
 café  // => 2: this indistinguishable constant has a 
different value
 The Unicode standard defines the preferred encoding for all characters
 and specifies a normalization procedure to convert text to a canonical
 form suitable for comparisons. JavaScript assumes that the source code
 it is interpreting has already been normalized and does not do any
 normalization on its own. If you plan to use Unicode characters in your
 JavaScript programs, you should ensure that your editor or some other
 tool performs Unicode normalization of your source code to prevent
 you from ending up with different but visually indistinguishable
 identifiers*/
/** 3.6 Symbols
 Symbols were introduced in ES6 to serve as non-string property names.
 To understand Symbols, you need to know that JavaScript’s
 fundamental Object type is an unordered collection of properties,
 where each property has a name and a value. Property names are
 typically (and until ES6, were exclusively) strings. But in ES6 and
 later, Symbols can also serve this purpose:
 let strname = "string name";      
// A string to use as a 
property name
 let symname = Symbol("propname"); // A Symbol to use as a 
property name
 typeof strname                    
a string
 typeof symname                    
// => "string": strname is 
// => "symbol": symname is 
a symbol
 let o = {};                       
o[strname] = 1;                   
string name
 o[symname] = 2;                   
Symbol name
 o[strname]                        
named property
 o[symname]                        
named property
 // Create a new object
 // Define a property with a 
// Define a property with a 
// => 1: access the string
// => 2: access the symbol
The Symbol type does not have a literal syntax. To obtain a Symbol
 value, you call the Symbol() function. This function never returns
 the same value twice, even when called with the same argument. This
 means that if you call Symbol() to obtain a Symbol value, you can
 safely use that value as a property name to add a new property to an
 object and do not need to worry that you might be overwriting an
 existing property with the same name. Similarly, if you use symbolic
 property names and do not share those symbols, you can be confident
 that other modules of code in your program will not accidentally
 overwrite your properties.
 In practice, Symbols serve as a language extension mechanism. When
 ES6 introduced the for/of loop (
 §5.4.4) and iterable objects
 (
 Chapter 12), it needed to define standard method that classes could
 implement to make themselves iterable. But standardizing any
 particular string name for this iterator method would have broken
 existing code, so a symbolic name was used instead. As we’ll see in
 Chapter 12, Symbol.iterator is a Symbol value that can be used
 as a method name to make an object iterable.
 The Symbol() function takes an optional string argument and returns
a unique Symbol value. If you supply a string argument, that string will
 be included in the output of the Symbol’s toString() method.
 Note, however, that calling Symbol() twice with the same string
 produces two completely different Symbol values.
 let s = Symbol("sym_x");
 s.toString()             
// => "Symbol(sym_x)"
 toString() is the only interesting method of Symbol instances.
 There are two other Symbol-related functions you should know about,
 however. Sometimes when using Symbols, you want to keep them
 private to your own code so you have a guarantee that your properties
 will never conflict with properties used by other code. Other times,
 however, you might want to define a Symbol value and share it widely
 with other code. This would be the case, for example, if you were
 defining some kind of extension that you wanted other code to be able
 to participate in, as with the Symbol.iterator mechanism
 described earlier.
 To serve this latter use case, JavaScript defines a global Symbol
 registry. The Symbol.for() function takes a string argument and
 returns a Symbol value that is associated with the string you pass. If no
 Symbol is already associated with that string, then a new one is created
 and returned; otherwise, the already existing Symbol is returned. That
 is, the Symbol.for() function is completely different than the
 Symbol() function: Symbol() never returns the same value twice,
 but Symbol.for() always returns the same value when called with
 the same string. The string passed to Symbol.for() appears in the
 output of toString() for the returned Symbol, and it can also be
retrieved by calling Symbol.keyFor() on the returned Symbol.
 let s = Symbol.for("shared");
 let t = Symbol.for("shared");
 s === t          
// => true
 s.toString()     
// => "Symbol(shared)"
 Symbol.keyFor(t) // => "shared */
/** 4.7.3 Operator Side Effects
 Evaluating a simple expression like 2 * 3 never affects the state of
 your program, and any future computation your program performs will
 be unaffected by that evaluation. Some expressions, however, have
 side effects, and their evaluation may affect the result of future
 evaluations. The assignment operators are the most obvious example: if
 you assign a value to a variable or property, that changes the value of
 any expression that uses that variable or property. The ++ and --
increment and decrement operators are similar, since they perform an
 implicit assignment. The delete operator also has side effects:
 deleting a property is like (but not the same as) assigning undefined
 to the property.
 No other JavaScript operators have side effects, but function invocation
 and object creation expressions will have side effects if any of the
 operators used in the function or constructor body have side effects */
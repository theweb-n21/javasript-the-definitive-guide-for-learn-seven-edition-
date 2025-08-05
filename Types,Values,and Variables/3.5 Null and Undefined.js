/*
 3.5 null and undefined
 null is a language keyword that evaluates to a special value that is
 usually used to indicate the absence of a value. Using the typeof
 operator on null returns the string “object”, indicating that null can
 be thought of as a special object value that indicates “no object”. In
 practice, however, null is typically regarded as the sole member of its
 own type, and it can be used to indicate “no value” for numbers and
 strings as well as objects. Most programming languages have an
 equivalent to JavaScript’s null: you may be familiar with it as NULL,
 nil, or None.
 JavaScript also has a second value that indicates absence of value. The
 undefined value represents a deeper kind of absence. It is the value
 of variables that have not been initialized and the value you get when
 you query the value of an object property or array element that does not
 exist. The undefined value is also the return value of functions that
 do not explicitly return a value and the value of function parameters for
 which no argument is passed. undefined is a predefined global
 constant (not a language keyword like null, though this is not an
 important distinction in practice) that is initialized to the undefined
 value. If you apply the typeof operator to the undefined value, it
 returns “undefined”, indicating that this value is the sole member of a
 special type.
 Despite these differences, null and undefined both indicate an
absence of value and can often be used interchangeably. The equality
 operator == considers them to be equal. (Use the strict equality
 operator === to distinguish them.) Both are falsy values: they behave
 like false when a boolean value is required. Neither null nor
 undefined have any properties or methods. In fact, using . or [] to
 access a property or method of these values causes a TypeError.
 I consider undefined to represent a system-level, unexpected, or
 error-like absence of value and null to represent a program-level,
 normal, or expected absence of value. I avoid using null and
 undefined when I can, but if I need to assign one of these values to
 a variable or property or pass or return one of these values to or from a
 function, I usually use null. Some programmers strive to avoid null
 entirely and use undefined in its place wherever they can. */
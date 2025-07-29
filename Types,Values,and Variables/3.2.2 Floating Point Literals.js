/* 3.2.2 Floating-Point Literals
 Floating-point literals can have a decimal point; they use the traditional
syntax for real numbers. A real value is represented as the integral part
 of the number, followed by a decimal point and the fractional part of
 the number.
 Floating-point literals may also be represented using exponential
 notation: a real number followed by the letter e (or E), followed by an
 optional plus or minus sign, followed by an integer exponent. This
 notation represents the real number multiplied by 10 to the power of
 the exponent.
 More succinctly, the syntax is:
 [digits][.digits][(E|e)[(+|-)]digits]
 For example:
 3.14
 2345.6789
 .333333333333333333
 6.02e23        
// 6.02 × 10²³
 1.4738223E-32  // 1.4738223 × 10⁻³²
 SEPARATORS IN NUMERIC LITERALS
 You can use underscores within numeric literals to break long literals up into chunks that are easier to
 read:
 let billion = 1_000_000_000;   // Underscore as a thousands separator.
 let bytes = 0x89_AB_CD_EF;     
// As a bytes separator.
 let bits = 0b0001_1101_0111;   // As a nibble separator.
 let fraction = 0.123_456_789;  // Works in the fractional part, too.
 At the time of this writing in early 2020, underscores in numeric literals are not yet formally
 standardized as part of JavaScript. But they are in the advanced stages of the standardization
 process and are implemented by all major browsers and by Node */
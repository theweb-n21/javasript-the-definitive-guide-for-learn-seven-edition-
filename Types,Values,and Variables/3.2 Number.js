//Integers (ইংরেজিতে: Integers, বাংলায়: পূর্ণসংখ্যা) হলো এমন সংখ্যাগুলো যেগুলোর দশমিক বা ভগ্নাংশ নেই এবং যেগুলো ধনাত্মক (positive), ঋণাত্মক (negative) অথবা শূন্য (zero) হতে পারে।

/*64-bit floating-point format** হলো কম্পিউটার প্রোগ্রামিং এবং গণনায় ব্যবহৃত একটি সংখ্যা সংরক্ষণের পদ্ধতি, যেখানে ভগ্নাংশ (decimal/fractional) সহ বড় বা ছোট সংখ্যাগুলোকে **64 বিটে** স্টোর করা হয়।

এটা সাধারণভাবে **double precision floating-point format** নামে পরিচিত, কারণ এটি 32-bit এর চেয়ে দ্বিগুণ (double) স্পষ্টতা (precision) দেয়।

---

## 🧠 সংক্ষিপ্তভাবে:

**64-bit floating-point format = IEEE 754 double precision format**

---

## ⚙️ গঠন (Structure):

64-bit floating-point সংখ্যা তিনটি অংশে বিভক্ত:

| অংশ                 | বিট সংখ্যা | কাজ                           |
| ------------------- | ---------- | ----------------------------- |
| Sign bit            | 1 bit      | ধনাত্মক (0) বা ঋণাত্মক (1)    |
| Exponent            | 11 bits    | স্কেল নির্ধারণ করে            |
| Fraction / Mantissa | 52 bits    | আসল সংখ্যাটির মান (precision) |

```
বিট বিন্যাস:
[sign (1 bit)] [exponent (11 bits)] [fraction/mantissa (52 bits)]
```

---

## 🔢 উদাহরণ:

ধরো তুমি লিখলে:

```js
let x = 3.141592653589793;
```

এই সংখ্যাটি জাভাস্ক্রিপ্টে (বা অনেক ভাষায়) 64-bit floating-point format-এ এমনভাবে মেমোরিতে সংরক্ষিত হয়, যাতে অনেক বেশি precision (নির্ভুলতা) বজায় রাখা যায়।

---

## ✅ IEEE 754 standard:

এটা হলো **international standard** যেটা বলে কিভাবে ভাসমান সংখ্যা (floating point number) কে কম্পিউটারে স্টোর করতে হবে।
জাভাস্ক্রিপ্ট, C, Python, Java—সব ভাষায় এটাই ব্যবহার হয়।

---

## ✅ সুবিধা:

* খুব বড় বা ছোট সংখ্যা সঠিকভাবে সংরক্ষণ করা যায়
* ভগ্নাংশ সহ সংখ্যা নিয়ে গণনা করা যায়
* ±15–17 digit পর্যন্ত precision পাওয়া যায়

---

## ❌ সীমাবদ্ধতা:

* সব দশমিক মান নিখুঁতভাবে সংরক্ষণ করা যায় না
  (যেমন: `0.1 + 0.2 !== 0.3` এই সমস্যা floating-point precision এর কারণে)
* বাস্তবে rounding error হতে পারে

---

## 🔍 ব্যবহার কোথায় হয়?

* গণিত ভিত্তিক সফটওয়্যার
* Financial calculations
* গেম ইঞ্জিন, ফিজিক্স ইঞ্জিন
* Scientific computing
* JavaScript, Python, C, Java ইত্যাদি ভাষায় সংখ্যার কাজকর্মে

---

## 🧮 ছোট উদাহরণ:

```js
let a = 0.1 + 0.2;
console.log(a); // Output: 0.30000000000000004
```

এখানে `0.3` ঠিকভাবে দেখা যাচ্ছে না কারণ ভেতরে সংখ্যা 64-bit floating-point ফরম্যাটে রয়েছে এবং এটি সব ভগ্নাংশ নিখুঁতভাবে প্রকাশ করতে পারে না।
*/

/* 3.2 Numbers
 1
 JavaScript’s primary numeric type, Number, is used to represent
 integers and to approximate real numbers. JavaScript represents
 numbers using the 64-bit floating-point format defined by the IEEE
 754 standard, which means it can represent numbers as large as
 ±1.7976931348623157 × 10 and as small as ±5 × 10 .
 308
 53
 −324
 53
 The JavaScript number format allows you to exactly represent all
 integers between −9,007,199,254,740,992 (−2 ) and
 9,007,199,254,740,992 (2 ), inclusive. If you use integer values larger
 than this, you may lose precision in the trailing digits. Note, however,
 that certain operations in JavaScript (such as array indexing and the
 bitwise operators described in 
Chapter 4) are performed with 32-bit
 integers. If you need to exactly represent larger integers, see 
§3.2.5.
 When a number appears directly in a JavaScript program, it’s called a
numeric literal. JavaScript supports numeric literals in several formats,
 as described in the following sections. Note that any numeric literal can
 be preceded by a minus sign (-) to make the number negative
*/


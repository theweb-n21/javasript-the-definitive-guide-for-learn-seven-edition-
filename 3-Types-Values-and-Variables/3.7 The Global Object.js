/*  3.7 The Global Object
 The preceding sections have explained JavaScript’s primitive types and
 values. Object types—objects, arrays, and functions—are covered in
 chapters of their own later in this book. But there is one very important
 object value that we must cover now. The global object is a regular
 JavaScript object that serves a very important purpose: the properties
 of this object are the globally defined identifiers that are available to a
 JavaScript program. When the JavaScript interpreter starts (or
 whenever a web browser loads a new page), it creates a new global
 object and gives it an initial set of properties that define:
 Global constants like undefined, Infinity, and NaN
 Global functions like isNaN(), parseInt() (
 eval() (
 §4.12)
 §3.9.2), and
 Constructor functions like Date(), RegExp(), String(),
 Object(), and Array() (
 §3.9.2)
 Global objects like Math and JSON (
 §6.8)
 The initial properties of the global object are not reserved words, but
 they deserve to be treated as if they are. This chapter has already
 described some of these global properties. Most of the others will be
covered elsewhere in this book.
 In Node, the global object has a property named global whose value
 is the global object itself, so you can always refer to the global object
 by the name global in Node programs.
 In web browsers, the Window object serves as the global object for all
 JavaScript code contained in the browser window it represents. This
 global Window object has a self-referential window property that can
 be used to refer to the global object. The Window object defines the
 core global properties, but it also defines quite a few other globals that
 are specific to web browsers and client-side JavaScript. Web worker
 threads (
 §15.13) have a different global object than the Window with
 which they are associated. Code in a worker can refer to its global
 object as self.
 ES2020 finally defines globalThis as the standard way to refer to
 the global object in any context. As of early 2020, this feature has been
 implemented by all modern browsers and by Node*/
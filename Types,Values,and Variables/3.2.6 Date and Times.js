/* 3.2.6 Dates and Times
 JavaScript defines a simple Date class for representing and
 manipulating the numbers that represent dates and times. JavaScript
 Dates are objects, but they also have a numeric representation as a
timestamp that specifies the number of elapsed milliseconds since
 January 1, 1970:
 let timestamp = Date.now();  // The current time as a 
timestamp (a number).
 let now = new Date();        
object.
 let ms = now.getTime();      
// The current time as a Date 
// Convert to a millisecond 
timestamp.
 let iso = now.toISOString(); // Convert to a string in 
standard format.
 The Date class and its methods are covered in detail in 
will see Date objects again in 
§11.4. But we
 §3.9.3 when we examine the details of
 JavaScript type conversions.*/
function isString(value) {
  return typeof value === "string";
}

isString(123); // false
isString("abc"); // true

// You can create a string with the String() constructor, if you call it
// without the new keyword
String(123); // "123"
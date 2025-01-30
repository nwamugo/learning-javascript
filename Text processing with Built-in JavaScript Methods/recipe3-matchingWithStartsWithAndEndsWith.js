// This code works fine for testing a string containing a single sentence
function startsWithEndsWith(str, start, end) {
  return str.startsWith(start) && str.endsWith(end)
}

// But when we want to extract from an article, we need a way to pass
// each line to our function

str.split("\n").forEach(str => {
  if (startsWithEndsWith(str, "##", "?")) {
    console.log(str);
  }
})


// The at() method. Code will likely break in older browsers
const str2 = "Do dogs dream?";

str2.at(-1); // "?"
str2.at(-2); // "m"
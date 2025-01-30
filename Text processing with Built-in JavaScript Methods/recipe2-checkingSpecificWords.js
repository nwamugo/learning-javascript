const msg = "I'd like to order two donuts";
const words = ["doughnut", "donut"];

function hasSomeWords(str, arr) {
  return arr.some(el => str.includes(el));
}

hasSomeWords(msg, words); // true


// Example 2
/* The second argument of includes() is optional and lets you
** specify the position at which to begin searching
*/
const quote = "Sachertorte is a torte of Austrian origin.";
quote.includes("Sachertorte", 15); // false


// Remember includes() is case-sensitive
const quote2 = "I'd like to order a SacherTorte.";
const word = "Sachertorte";

quote.includes(word); // false;

const quote3 = "I'd like to order a SacherTorte.".toLowerCase();
const word2 = "Sachertorte".toLowerCase();

quote.includes(word2); // true;


// Be careful when looking for words that also have a compound form.
/**
 * If you search for "cake" in "I'd like to order two pancakes"
 * includes() returns true
 * If you don't want that to happen, you should use a regex token
 * known as a word boundary.
 */
const str = `Feel confident in even the most unforeseen weather
conditions with these waterproof trail-running shoes helping you stay
dry. Available in four new colors: Velvet Brown, Black, Golden Moss/Medium Blue.
`;


function extractList(str) {
  const start = str.indexOf(":");
  const end = str.indexOf(".", start);
  const list = str.slice(start + 2, end); // Velvet Brown, Black, Golden Moss/Medium Blue

  // Split the string by comma or forward slash
  const arr = list.includes(",") ? list.split(", ") : list.split("/"); // ["Velvet Brown", "Black", "Golden Moss", "Medium Blue"]

  // Remove "etc" if it exists
  arr.at(-1) === "etc" ? arr.pop() : null;

  // Remove and/or
  return arr.map(word => {
    if (word.startsWith("and ")) {
      return word.slice(4);
    } else if (word.startsWith("or ")) {
      return slice(3);
    } else {
      return word;
    }
  })

}
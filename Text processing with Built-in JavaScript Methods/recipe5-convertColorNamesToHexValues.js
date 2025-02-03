/**
 * Suppose you're working on aa drawing application that works
 * with hexadecimal (hex) color codes. You want to provide a field
 * that lets users enter a color name to be converted tto its hex
 * equivalence automatically.
 * You need aa solution for converting colors into their hex representation
 */

function convertColorToHex(color) {
  // wwe create an HTML element based on the tag name provided as the argument
  const canvas = document.createElement("canvas");
  // we create a context object for the canvas using the getContext() method
  // we specify that the canvas should be a two-dimensional canvas by passing 2d as an argument
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = color;
  return ctx.fillStyle.toUpperCase();
}

convertColorToHex("Khaki"); // #F0E68C
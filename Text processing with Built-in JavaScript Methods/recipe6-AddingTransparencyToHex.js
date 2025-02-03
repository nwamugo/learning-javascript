function addAlphaToHex(hex, percent) {
  const decimal = percent / 100;
  const rgb = Math.round(decimal * 255)
  let alpha = rgb.toString(16).toUpperCase();

  if (alpha.length === 1) {
    alpha = "0" + alpha;
  }

  return hex + alpha;
}
addAlphaToHex("#FFFFFF", 70); // #FFFFFFB3


// compact version
function addAlphaToHexCompact(hex, percent) {
  const alpha = Math.round(percent / 100 * 255).toString(16)
                .toUpperCase().padStart(2, "0");
  return hex + alpha;
}

/**
 * The above compact method uses padStart() to add a leading zero if necessary
 * The first parameter of padStart() defines the length of the resulting string
 * once the given string has been padded, so padStart(2, "0") ensures the
 * hex string is always two characters long.
 */
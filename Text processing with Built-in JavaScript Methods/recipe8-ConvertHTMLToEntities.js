function escapeHTML(str) {
  return str
    .replaceAll('&', 'amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

escapeHTML('<a href="test.htm">foo</a>'); // "&lt;a href=&quot;test.htm&quot;&gt;doo&lt;/a&gt;"

/**
 * By using HTML entities, we can display certain characters that would
 * otherwise be interpreted by web browsers as HTML code.
 */
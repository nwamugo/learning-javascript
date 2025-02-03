/**
 * Imagine you've written a web scrapper that collects news from the web.
 * The text you grab may contain unwanted HTML element, like <span>, <img>, <a>, etc
 * What you need is a function that safely removes all unwanted elements from the text
 */

function stripHTML(html) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
}

const rawText = '<a href="">Fed</a> Signals<img src="n.png"> Smaller Rises';
stripHTML(rawText); // "Fed Signals Smaller Rises"
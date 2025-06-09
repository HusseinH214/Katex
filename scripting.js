// Gets references to the editor and preview elements for manipulation.
const editor = document.getElementById("editor");
const preview = document.getElementById("preview");

// Attaches an event listener that triggers on every keystroke or content change in the editor
editor.addEventListener("input", () => {
  renderAllText();
});

function renderAllText() {
  const text = editor.textContent;
  
  if (!text) {
    preview.innerHTML = ""; // Clear if no text
    return;
  }

  try {
    // Try to render the entire text as LaTeX/KaTeX
    // KaTeX can handle regular text mixed with LaTeX expressions
    const rendered = katex.renderToString(text, { 
      throwOnError: false,
      displayMode: false // inline mode for mixed content
    });
    preview.innerHTML = rendered;
  } catch (e) {
    // If KaTeX fails completely, show the text as plain HTML
    // Replace spaces with non-breaking spaces to preserve them
    const preservedSpaces = text.replace(/ /g, '&nbsp;');
    preview.innerHTML = `<span>${preservedSpaces}</span>`;
  }
}
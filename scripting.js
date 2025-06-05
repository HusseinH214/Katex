const editor = document.getElementById("editor");
const preview = document.getElementById("preview");

editor.addEventListener("input", () => {
  renderFromSlash();
});

function renderFromSlash() {
  const text = editor.textContent;

  // Try to find the latest valid-looking LaTeX expression
  const match = text.match(/\\[a-zA-Z0-9{}\s^_\\]+$/);

  if (match) {
    const latex = match[0];
    try {
      const rendered = katex.renderToString(latex, { throwOnError: false });
      preview.innerHTML = rendered;
    } catch (e) {
      preview.innerHTML = `<span style="color:red;">Invalid LaTeX</span>`;
    }
  } else {
    preview.innerHTML = ""; // Clear if no LaTeX detected
  }
}

const editor = document.getElementById("editor");
const preview = document.getElementById("preview");

editor.addEventListener("keyup", (event) => {
  if (event.key === " " || event.key === "Enter") {
    renderFromSlash();
  }
});

function renderFromSlash() {
  const text = editor.textContent;
  const match = text.match(/\\[a-zA-Z0-9{}\s^_\\]+$/); // match last LaTeX expression

  if (match) {
    const latex = match[0];
    try {
      const rendered = katex.renderToString(latex, { throwOnError: false });
      preview.innerHTML = rendered; // update preview box
    } catch (e) {
      preview.innerHTML = `<span style="color:red;">Invalid LaTeX</span>`;
      console.error("KaTeX render error:", e);
    }
  } else {
    preview.innerHTML = ""; // clear preview if no match
  }
}

# KaTeX Math Note-Taking App

A lightweight, tablet-friendly web app for taking math notes with support for inline and block LaTeX-style math rendering using [KaTeX](https://katex.org/). Designed with math students in mind, especially for use on Android tablets with attached keyboards (like Samsung tablets).

Core Features
- Mix normal text and math expressions in one editor
- Supports **inline math** using `$...$` (e.g., `Let $x^2 + y^2 = r^2$`)
- Supports **block math** using `$$...$$` (e.g., `$$ \int_0^1 x^2 \, dx $$`)
- **Live preview** updates as you type
- Uses `contenteditable` for a Notion-like writing experience

Input & Layout
- Designed for tablets with keyboard support
- Optimized for both portrait and landscape modes
- Touch-friendly interface planned (symbol palette, zoom, etc.)

Additional Planned Features
- S Pen support with palm rejection
- Math symbol palette and template insertions
- Export notes as PDF or PNG
- Auto-save to local storage
- Offline support (PWA or WebView)
- Dark mode and font scaling for accessibility

Tech Stack

- **HTML/CSS/JavaScript**
- **KaTeX** for math rendering
- Planned: WebView (Android Studio) or PWA (Progressive Web App)



## 🛠️ Development Roadmap

- [ ] Core live-rendering engine
- [ ] Math block and inline parser
- [ ] S Pen and touch input enhancements
- [ ] Export tools
- [ ] Offline support / PWA configuration
- [ ] Android WebView build


> This app is under active development as a student project. Built with math, curiosity, and plenty of KaTeX.


// scripts/main.js

// Map of file name to content
const fileContents = {
  "README.md": `// Hello, I'm Atharv Munot
// I'm a systems thinker, AI enthusiast, and builder of intelligent tools.
const aboutMe = {
  college: "COEP Technological University",
  goals: ["Innovate in AI/Systems"],
  interests: ["AI", "Quantum ML", "AR Glasses", "Edge Computing"]
}
`,
  "smart-glasses.js": `// Smart Glasses Project
// AR-powered glasses with real-time edge AI processing.
function initSmartGlasses() {
  console.log("Smart Glasses initialized.");
}
`,
  "pdf-rag.js": `// PDF RAG Project
// Retrieval-Augmented Generation for PDF documents.
function loadPDF(file) {
  console.log("Loading PDF:", file);
}
`,
  "budget-tracker.js": `// Budget Tracker
// Simple tracker for income, expenses, and savings.
let balance = 0;
function addExpense(amount) {
  balance -= amount;
}
`,
  "multilingual-transcriber.js": `// Multilingual Transcriber
// Transcribes audio in multiple languages with speaker diarization.
function transcribe(audio) {
  console.log("Transcribing:", audio);
}
`,
  "Skills.css": `/* Skills CSS */
.skill-badge {
  background: #333;
  color: white;
  padding: 5px;
}
`,
  "Experience.ts": `// Experience TypeScript file
interface Experience {
  role: string;
  company: string;
  years: number;
}
`
};

// Grab elements
const files = document.querySelectorAll(".file");
const editorWindow = document.getElementById("editor-window");
const tab = document.querySelector(".tab");

files.forEach(file => {
  file.addEventListener("click", () => {
    const fileName = file.getAttribute("data-file");

    // Remove 'active' from all files
    files.forEach(f => f.classList.remove("active"));

    // Add 'active' to clicked file
    file.classList.add("active");

    // Update editor content
    editorWindow.innerHTML = `<pre><code>${fileContents[fileName] || "// File content not found"}</code></pre>`;

    // Update tab name
    if (tab) {
      tab.setAttribute("data-file", fileName);
      tab.innerHTML = `${fileName} <span class="close">×</span>`;
    }
  });
});


const folderLabels = document.querySelectorAll(".folder-label");

folderLabels.forEach(label => {
  label.addEventListener("click", () => {
    const folder = label.parentElement; // the <li class="folder">
    const subFiles = folder.querySelector(".sub-files");

    if (subFiles) {
      subFiles.classList.toggle("collapsed");
      folder.classList.toggle("collapsed");
    }
  });
});
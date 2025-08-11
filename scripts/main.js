// scripts/main.js



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
    editorWindow.innerHTML = fileContents[fileName] || 
  `<div style="color: gray;">// File content not found</div>`;

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
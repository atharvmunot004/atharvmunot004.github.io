document.getElementById("download-btn").addEventListener("click", () => {
    const btn = document.getElementById("download-btn");
    const filename = btn.getAttribute("data-file");

    if (!filename) return alert("No file selected!");

    const fileUrl = `/docs/${filename}`;

    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = filename;
    document.body.appendChild(a); // Required for Firefox
    a.click();
    document.body.removeChild(a);
});


function displayCodeResult() {
    const html = document.querySelector("#html");
    const css = document.querySelector("#css");
    const js = document.querySelector("#js");

    const combinedCode = `${html.value} <style>${css.value}</style> <script>${js.value}</script>`;

    // edit the iframe's srcdoc
    const result = document.querySelector("#result");
    result.srcdoc = combinedCode;
}

// make iframe update whenever user finishes typing a letter
const editors = document.querySelectorAll(".editor");
editors.forEach(editor => editor.onkeyup = () => displayCodeResult());

// make the code appear in the iframe preview on page load
window.onload = () => displayCodeResult();

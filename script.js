const textarea = document.querySelector("textarea");

textarea.addEventListener("input", (e) => {
  textarea.style.height = "63px";
  let scHeight = e.target.scrollHeight;
  textarea.style.height = `${scHeight}px`;
})
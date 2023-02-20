console.log("Hej Filippa");

window.addEventListener("load", start);

function start() {
  document.querySelector("#blue_container").addEventListener("click", fallover);
}

function fallover() {
  document.querySelector("#blue_container").classList.add("fallover");
}

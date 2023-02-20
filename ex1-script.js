console.log("Hej Filippa");

window.addEventListener("load", start);

function start() {
  document.querySelector("#orange_container").addEventListener("click", jump);
}

function jump(){
    document.querySelector("#orange_container").classList.add("jump");
}
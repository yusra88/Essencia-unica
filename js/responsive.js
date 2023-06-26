
// Code de la navigation responsive
const menuNav = document.querySelector("#menu");
const abrirNav = document.querySelector("#abrir");
const cerrarNav = document.querySelector("#cerrar");
abrirNav.addEventListener("click", () => {
  menuNav.classList.add("visible");
})

cerrarNav.addEventListener("click", () => {
  menuNav.classList.remove("visible");
})
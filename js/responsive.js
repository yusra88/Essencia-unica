
 //Code de la navigation responsive
const menuNav = document.querySelector("#menu");
const abrirNav = document.querySelector("#abrir");
const cerrarNav = document.querySelector("#cerrar");
abrirNav.addEventListener('click', function(event){
  event.preventDefault();
  menu.classList.add('visible');
});

cerrarNav.addEventListener('click', function(event){
  event.preventDefault();
  menu.classList.remove('visible');
});

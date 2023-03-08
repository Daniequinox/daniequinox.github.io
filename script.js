// Mostrar y ocultar la barra de navegación
const navMenu = document.getElementById("nav-menu"),
  toggleMenu = document.getElementById("nav-toggle"),
  closeMenu = document.getElementById("nav-close");

toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

// Cerrar la barra de navegacion luego de hacer click en uno de los Items
const navLink = document.querySelectorAll(".navlink");

function linkAction() {
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Agregar la clase Active cuando se hace click en un item de la barra de navegacion
var btnContainer = document.getElementById("nav-menu");

var btns = btnContainer.getElementsByClassName("navlink");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    this.className += " active";
  });
}
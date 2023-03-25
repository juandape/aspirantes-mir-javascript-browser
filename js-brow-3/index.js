// Obtener elementos del DOM
const form = document.querySelector("form");
const name = document.querySelector("#name");
const email = document.querySelector("#email")
const section = document.querySelector("section");
const datos = {}
// Manejar el evento de enviar el formulario
form.addEventListener("submit", (event) => {
  event.preventDefault();
  datos.name = name.value
  datos.email = email.value
  localStorage.setItem("datos", JSON.stringify(datos));
  
});

// Función para mostrar el nombre guardado en localStorage
localStorage.getItem("datos")
const muestra = JSON.parse(localStorage.getItem("datos"))
function showName() {
  const show = document.querySelector(".mostrar");
  if (localStorage.length === 0) {
    show.textContent = `Sin datos`;
  } else {
    show.textContent = `Nombre en localStorage: ${muestra.name}.    Email en localStorage: ${muestra.email} `
  }
}

// Función para borrar el nombre guardado en localStorage
function deleteName() {
    localStorage.removeItem("datos")
}

// Mostrar el nombre guardado al cargar la página
showName();

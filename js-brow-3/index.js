// Obtener elementos del DOM
const form = document.querySelector("form");
const name = document.querySelector("#name");
const email = document.querySelector("#email")
const section = document.querySelector("section");

// Manejar el evento de enviar el formulario
form.addEventListener("submit", (event) => {
  event.preventDefault();
  localStorage.setItem("name", name.value);
  localStorage.setItem("email", email.value)
});

// Función para mostrar el nombre guardado en localStorage
function showName() {
  const show1 = document.querySelector(".nombre");
  const show2 = document.querySelector(".email")
  if (localStorage.length === 0) {
    show1.textContent = `Sin datos`;
  } else {
    show1.textContent = `Nombre guardado en el LocalStorage: ${localStorage.name}`;
    show2.textContent = `Email guardado en el LocalStorage: ${localStorage.email}`
  }
}

// Función para borrar el nombre guardado en localStorage
function deleteName() {
    localStorage.removeItem("name")
    localStorage.removeItem("email")
}

// Mostrar el nombre guardado al cargar la página
showName();

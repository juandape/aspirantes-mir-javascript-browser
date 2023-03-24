//variables
const taskText = document.querySelector("#newTask"); //seleccion texto input
const addTask = document.querySelector(".add"); //boton add
const newT = document.querySelector(".tasks"); // seleccion div de tareas

//checkbox and label attributes
const tareas = [];
let ident = 1;
function handleSubmit(event) {
  if(taskText.value === ""){
    return
  }
  const checkBox = document.createElement("input"); //creacion input
  const label = document.createElement("label"); //creacion label
  const newDiv = document.createElement("div");
  checkBox.type = "checkbox";
  checkBox.name = "box";
  checkBox.id = "box";
  checkBox.className = "box";
  label.htmlFor = "box";
  label.className = "tareas completed";
  label.appendChild(document.createTextNode(taskText.value));
  newT.appendChild(newDiv);
  newDiv.className = "tasks";
  newDiv.appendChild(checkBox);
  newDiv.appendChild(label);
  tareas.push({ id: ident, Title: taskText.value, completed: false });
  ident += 1;
  event.preventDefault(); //avoid to refresh page
}

//clean input field
addTask.addEventListener("click", function () {
  taskText.value = "";
});

//funcion de checkbox
function handleCheckTask() {
  let cont = 1;
  const checkBox = document.getElementsByName("box"); //selecciona los checkbox
  for (let j in checkBox) {
    //itera sobre los checkbox
    for (let i in tareas) {
      //itera sobfre las objetos
      if (tareas[i].id === cont && checkBox[j].checked) {
        tareas[i].completed = true;
      } else if (tareas[i].id === cont && checkBox[j].checked === false) {
        tareas[i].completed = false;
      }
    }
    cont += 1;
  }
}

// funcion delete
function handleDelete() {
  const checkBox = document.getElementsByName("box");
  const labels = document.getElementsByClassName("completed")
  for (let i in checkBox){
    for (let j in labels){
  if(checkBox[i].checked){
    checkBox[i].remove()
    labels[i].remove()
  }
}
}
}
//funcion tachado
function completed(e) {
    if (e.target.type === "checkbox") {
      e.target.parentNode.classList.toggle("is-completed") //muestra u oculta la propiedad
    }
  }
const divG = document.querySelector("#task")
  divG.addEventListener("click", function(e) {
    completed(e)
  })


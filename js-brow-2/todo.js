const taskText = document.querySelector("#newTask"); //seleccion texto input
const addTask = document.querySelector(".add"); //boton add

// const tareas = [];
// let ident = 1;
function handleSubmit() {
    //crear checkbox
    const newT = document.querySelector(".tasks");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox"
    checkBox.name = "box";
    checkBox.id = "box";
    const label = document.createElement("label");
    label.htmlFor = "box"
    label.className = "tareas"
    label.appendChild(document.createTextNode(taskText.value))
    newT.appendChild(checkBox)
    newT.appendChild(label);
    // tareas.push({ id: ident, Title: taskText.value, completed: false });
    // ident += 1;

}

// console.log(tareas);

const menu = [
  {
    name: "Home",
    link: "/",
    items: [],
  },
  {
    name: "About",
    link: "/about",
    items: [],
  },
  {
    name: "Products",
    link: "/products",
    items: [
      {
        name: "Product 1",
        link: "/products/1",
        items: [],
      },
      {
        name: "Product 2",
        link: "/products/2",
        items: [
          {
            name: "Product 2.1",
            link: "/products/2/1",
            items: [],
          },
        ],
      },
    ],
  },
  {
    name: "Services",
    link: "/services",
    items: [
      {
        name: "Service 1",
        link: "/services/1",
        items: [
          {
            name: "Service 1.1",
            link: "/services/1/1",
            items: [],
          },
        ],
      },
      {
        name: "Service 2",
        link: "/services/2",
        items: [
          {
            name: "Service 2.1",
            link: "/services/2/1",
            items: [],
          },
          {
            name: "Service 2.2",
            link: "/services/2/2",
            items: [],
          },
        ],
      },
    ],
  },
];

//creacion de lista
function list(menu) {
  const createul = document.createElement("ul");
  createul.className = "list";
  for (let i in menu) {
    const createli = document.createElement("li");
    const createli2 = document.createElement("li");
    createli.className = "name color";
    createli2.className = "link";
    createli.textContent = menu[i].name;
    createli2.textContent = menu[i].link;
    createul.appendChild(createli);
    createul.appendChild(createli2);

    //boton
    const boton = document.createElement("button");
    boton.className = "boton";
    boton.innerText = "=>";
    createli.insertBefore(boton, createli.firstChild);

    boton.addEventListener("click", function () {
      createli2.classList.toggle("link");
    });

    if (menu[i].items.length > 0) {
      createul.appendChild(list(menu[i].items));
    }
  }
  return createul;
}

document.body.appendChild(list(menu));

//cambio de color
const change = document.querySelectorAll("li");
for (let i = 0; i < change.length; i++) {
  change[i].addEventListener("click", function () {
    change[i].classList.toggle("color--ocultar");
  });
}

//boton
const ulSelect = document.getElementsByTagName("ul");
for (let i = 1; i < ulSelect.length; i++) {
  ulSelect[i].className = "ulhidden";
  
}
const boton2 = document.getElementsByClassName("boton");
for (let j in boton2) {
  boton2[j].addEventListener("click", function () {
    for (let i = 1; i < ulSelect.length; i++) {
      // ulSelect[i].className = "ulhidden";
      ulSelect[i].classList.toggle("ulhidden")
      
    }
  });
}

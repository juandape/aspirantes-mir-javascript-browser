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
const createul = document.createElement("ul")
document.body.appendChild(createul)

function list(menu){
  for (let i in menu){
  const createli = document.createElement("li")
  const createli2 = document.createElement("li")
  const createli3 = document.createElement("li")
  createli.textContent = menu[i].name
  createli2.textContent = menu[i].link
  createul.appendChild(createli)
  createul.appendChild(createli2)
  if(menu[i].items.length === 0){
    createli3.textContent = menu[i].items
    createul.appendChild(createli3)
  }
  else{
    // createli3.appendChild(createul)
    createli3.textContent = list(menu[i].items)
    // createul.appendChild(createli3)
  }
  }
  
}


document.body.appendChild(list(menu))

// const lista = document.querySelector("ul");

// for (let i in menu) {
//   const elementn = document.createElement("li");
//   elementn.textContent = menu[i].name;
//   lista.appendChild(elementn);

//   const elementl = document.createElement("li");
//   elementl.textContent = menu[i].link;
//   lista.appendChild(elementl);
//   //items vacios
//   if (menu[i].items.length === 0) {
//     const elementi = document.createElement("li");
//     elementi.textContent = menu[i].items;
//     lista.appendChild(elementi);
//     //items con elementos
//   } else {
//     const elementul = document.createElement("ul");
//     lista.appendChild(elementul);

//     for (let j in menu[i].items) {
//       const elementi1 = document.createElement("li");
//       elementi1.textContent = menu[i].items[j].name;
//       elementul.appendChild(elementi1);

//       const elementl1 = document.createElement("li");
//       elementl1.textContent = menu[i].items[j].link;
//       elementul.appendChild(elementl1);

//       if (menu[i].items[j].items.length === 0) {
//         const elementt1 = document.createElement("li");
//         elementt1.textContent = menu[i].items[j].items;
//         elementul.appendChild(elementt1);
//       } else {
//         const elementul2 = document.createElement("ul");
//         elementul2.appendChild(elementt1);
//       }
//     }
//   }
// }

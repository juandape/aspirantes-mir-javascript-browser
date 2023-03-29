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
// document.body.appendChild(createul);

function list(menu) {
  const createul = document.createElement("ul");
  createul.className = "list";
  for (let i in menu) {
    const createli = document.createElement("li");
    const createli2 = document.createElement("li");
    const createli3 = document.createElement("li");
    createli.className = "name";
    createli2.className = "link";
    createli3.className = "items";
    createli.textContent = menu[i].name;
    createli2.textContent = menu[i].link;
    createul.appendChild(createli);
    createul.appendChild(createli2);
    if (menu[i].items.length > 0) {
      createli3.textContent = list(menu[i].items);
      createul.appendChild(list(menu[i].items))
    }
  }
  return createul
}

document.body.appendChild(list(menu));
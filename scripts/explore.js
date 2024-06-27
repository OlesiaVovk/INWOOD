categoriesList = [
  {
    name: "Bedroom",
    elements: [
      {
        imageURL: "assets/images/explore/chair.phg",
        link: "/somelink",
      },
      {
        imageURL: "assets/images/explore/chairs.phg",
        link: "/somelink2",
      },
      {
        imageURL: "assets/images/explore/guestroom.phg",
        link: "/somelink2",
      },
      {
        imageURL: "assets/images/explore/mirror.phg",
        link: "/somelink",
      },
      {
        imageURL: "assets/images/explore/sofa.phg",
        link: "/somelink2",
      },
    ],
  },
  {
    name: "Dining Room",
    elements: [
      {
        imageURL: "assets/images/explore/chair.phg",
        link: "/somelink",
      },
      {
        imageURL: "assets/images/explore/chairs.phg",
        link: "/somelink2",
      },
      {
        imageURL: "assets/images/explore/guestroom.phg",
        link: "/somelink2",
      },
      {
        imageURL: "assets/images/explore/mirror.phg",
        link: "/somelink",
      },
      {
        imageURL: "assets/images/explore/sofa.phg",
        link: "/somelink2",
      },
    ],
  },
  {
    name: "Meeting Room",
    elements: [
      {
        imageURL: "assets/images/explore/chair.phg",
        link: "/somelink",
      },
      {
        imageURL: "assets/images/explore/chairs.phg",
        link: "/somelink2",
      },
      {
        imageURL: "assets/images/explore/guestroom.phg",
        link: "/somelink2",
      },
      {
        imageURL: "assets/images/explore/mirror.phg",
        link: "/somelink",
      },
      {
        imageURL: "assets/images/explore/sofa.phg",
        link: "/somelink2",
      },
    ],
  },
  {
    name: "Workspace",
    elements: [
      {
        imageURL: "assets/images/explore/chair.phg",
        link: "/somelink",
      },
      {
        imageURL: "assets/images/explore/chairs.phg",
        link: "/somelink2",
      },
      {
        imageURL: "assets/images/explore/guestroom.phg",
        link: "/somelink2",
      },
      {
        imageURL: "assets/images/explore/mirror.phg",
        link: "/somelink",
      },
      {
        imageURL: "assets/images/explore/sofa.phg",
        link: "/somelink2",
      },
    ],
  },
  {
    name: "Living Room",
    elements: [
      {
        imageURL: "assets/images/explore/chair.phg",
        link: "/somelink",
      },
      {
        imageURL: "assets/images/explore/chairs.phg",
        link: "/somelink2",
      },
      {
        imageURL: "assets/images/explore/guestroom.phg",
        link: "/somelink2",
      },
      {
        imageURL: "assets/images/explore/mirror.phg",
        link: "/somelink",
      },
      {
        imageURL: "assets/images/explore/sofa.phg",
        link: "/somelink2",
      },
    ],
  },
  {
    name: "Kitchen",
    elements: [
      {
        imageURL: "assets/images/explore/chair.phg",
        link: "/somelink",
      },
      {
        imageURL: "assets/images/explore/chairs.phg",
        link: "/somelink2",
      },
      {
        imageURL: "assets/images/explore/guestroom.phg",
        link: "/somelink2",
      },
      {
        imageURL: "assets/images/explore/mirror.phg",
        link: "/somelink",
      },
      {
        imageURL: "assets/images/explore/sofa.phg",
        link: "/somelink2",
      },
    ],
  },
  {
    name: "Living Space",
    elements: [
      {
        imageURL: "assets/images/explore/chair.phg",
        link: "/somelink",
      },
      {
        imageURL: "assets/images/explore/chairs.phg",
        link: "/somelink2",
      },
      {
        imageURL: "assets/images/explore/guestroom.phg",
        link: "/somelink2",
      },
      {
        imageURL: "assets/images/explore/mirror.phg",
        link: "/somelink",
      },
      {
        imageURL: "assets/images/explore/sofa.phg",
        link: "/somelink2",
      },
    ],
  },
];

document.body.onload = addElement;

function addElement() {
  let parent_el = document.getElementById("parent");
  let my_list = document.getElementById("categories");
  let new_list = document.createElement("ul");
  new_list.className = "explore_categories_list";

  html = categoriesList
    .map((item) => `<li class="explore_categories_li">${item.name}</li>`)
    .join("");
  new_list.innerHTML = html;
  parent_el.insertBefore(new_list, my_list);
}

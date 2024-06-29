categoriesList = [
  {
    name: "Bedroom",
    elements: [
      {
        imageURL: "assets/images/explore/explore_grey.png",
      },
      {
        imageURL: "assets/images/explore/explore_chair.png",
      },
      {
        imageURL: "assets/images/explore/explore_sofa.png",
      },
      {
        imageURL: "assets/images/explore/explore_mirror.png",
      },
      {
        imageURL: "assets/images/explore/explore_chairs.png",
      },
      {
        imageURL: "assets/images/explore/explore_guestroom.png",
      },
    ],
  },
  {
    name: "Dining Room",
    elements: [
      {
        imageURL: "assets/images/explore/explore_grey.png",
      },
      {
        imageURL: "assets/images/explore/explore_guestroom.png",
      },
      {
        imageURL: "assets/images/explore/explore_sofa.png",
      },
      {
        imageURL: "assets/images/explore/explore_chairs.png",
      },
      {
        imageURL: "assets/images/explore/explore_mirror.png",
      },
      {
        imageURL: "assets/images/explore/explore_chair.png",
      },
    ],
  },
  {
    name: "Meeting Room",
    elements: [
      {
        imageURL: "assets/images/explore/explore_grey.png",
      },
      {
        imageURL: "assets/images/explore/explore_mirror.png",
      },
      {
        imageURL: "assets/images/explore/explore_chair.png",
      },

      {
        imageURL: "assets/images/explore/explore_sofa.png",
      },
      {
        imageURL: "assets/images/explore/explore_chairs.png",
      },
      {
        imageURL: "assets/images/explore/explore_guestroom.png",
      },
    ],
  },
  {
    name: "Workspace",
    elements: [
      {
        imageURL: "assets/images/explore/explore_grey.png",
      },
      {
        imageURL: "assets/images/explore/explore_guestroom.png",
      },
      {
        imageURL: "assets/images/explore/explore_mirror.png",
      },
      {
        imageURL: "assets/images/explore/explore_sofa.png",
      },
      {
        imageURL: "assets/images/explore/explore_chairs.png",
      },
      {
        imageURL: "assets/images/explore/explore_chair.png",
      },
    ],
  },
  {
    name: "Living Room",
    elements: [
      {
        imageURL: "assets/images/explore/explore_grey.png",
      },
      {
        imageURL: "assets/images/explore/explore_guestroom.png",
      },
      {
        imageURL: "assets/images/explore/explore_chair.png",
      },
      {
        imageURL: "assets/images/explore/explore_mirror.png",
      },
      {
        imageURL: "assets/images/explore/explore_sofa.png",
      },
      {
        imageURL: "assets/images/explore/explore_chairs.png",
      },
    ],
  },
  {
    name: "Kitchen",
    elements: [
      {
        imageURL: "assets/images/explore/explore_grey.png",
      },
      {
        imageURL: "assets/images/explore/explore_chair.png",
      },
      {
        imageURL: "assets/images/explore/explore_chairs.png",
      },
      {
        imageURL: "assets/images/explore/explore_guestroom.png",
      },
      {
        imageURL: "assets/images/explore/explore_mirror.png",
      },
      {
        imageURL: "assets/images/explore/explore_sofa.png",
      },
    ],
  },
  {
    name: "Living Space",
    elements: [
      {
        imageURL: "assets/images/explore/explore_grey.png",
      },
      {
        imageURL: "assets/images/explore/explore_guestroom.png",
      },
      {
        imageURL: "assets/images/explore/explore_chair.png",
      },
      {
        imageURL: "assets/images/explore/explore_mirror.png",
      },
      {
        imageURL: "assets/images/explore/explore_sofa.png",
      },
      {
        imageURL: "assets/images/explore/explore_chairs.png",
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
    .map(
      (item) =>
        `<li class="explore_categories_li" id="${item.name}">${item.name}</li>`
    )
    .join("");

  new_list.innerHTML = html;
  parent_el.insertBefore(new_list, my_list);

  const links = parent_el.querySelectorAll("li");

  for (let link of links) {
    link.addEventListener("click", function (e) {
      photo_parent.innerHTML = "";
      e.preventDefault();
      addPhoto();
    });

    function addPhoto() {
      let photo_parent = document.getElementById("photo_parent");
      let my_photos = document.getElementById("photos");
      let new_photos = document.createElement("div");
      new_photos.className = "explore_categories_photos";
      let arrayOfPhotos = [];

      categoriesList.map((category) => {
        if (category.name === link["id"]) {
          category.elements.map((element) => {
            arrayOfPhotos.push(`<img src="${element.imageURL}"/>`);
          });
        }
      });
      new_photos.innerHTML = arrayOfPhotos.join("");
      photo_parent.insertBefore(new_photos, my_photos);
    }
  }
}

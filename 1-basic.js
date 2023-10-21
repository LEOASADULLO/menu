const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

// let allBtn = document.getElementById("all-btn");
// let breakBtn = document.getElementById("breakfast-btn");
// let lunchBtn = document.getElementById("lunch-btn");
// let shakeBtn = document.getElementById("shakes-btn");

// all-btn.addEventListener("click", () => {
//   sectionCenter.innerHTML = null;
//   let newArr = menu.map((value, index, array) => {
//     let html = `<article class="menu-item">
//     <img src=${value.img} alt=${value.title} class="photo" />
//     <div class="item-info">
//       <header>
//         <h4>${value.title}</h4>
//         <h4 class="price">$${value.price}</h4>
//       </header>
//       <p class="item-text">
//         ${value.desc}
//       </p>
//     </div>
//   </article>`;

//     sectionCenter.insertAdjacentHTML("beforeend", html);
//   });
//   render(newArr);
// });

// breakfast-btn.addEventListener("click", () => {
//   sectionCenter.innerHTML = null;
//   let newArr = menu.filter((element) =>
//     element.category == breakfast.value ? element : null
//   );
//   render(newArr);
// });
// lunch-btn.addEventListener("click", () => {
//   sectionCenter.innerHTML = null;
//   let newArr = menu.filter((element) =>
//     element.category == lunch.value ? element : null
//   );
//   render(newArr);
// });
// shakes-btn.addEventListener("click", () => {
//   sectionCenter.innerHTML = null;
//   let newArr = menu.filter((element) =>
//     element.category == shakes.value ? element : null
//   );
//   render(newArr);
// });


sectionCenter = document.querySelector(".section-center");
let elForm = document.querySelector("#form");
let elInput = document.querySelector("#input");


function render(arr) {
  arr.map((value) => {
    let html = `<article class="menu-item">
    <img src=${value.img} alt=${value.title} class="photo" />
    <div class="item-info">
      <header>
        <h4>${value.title}</h4>
        <h4 class="price">$${value.price}</h4>
      </header>
      <p class="item-text">
        ${value.desc}
      </p>
    </div>
  </article>`;

    sectionCenter.insertAdjacentHTML("beforeend", html);
  });
}
render(menu);

// input qismi
elForm.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (e.keyCode == 13) {
    sectionCenter.innerHTML = null;
    let newArr = menu.filter((element) =>
      element.category.toLowerCase() == elInput.value.toLowerCase()
        ? element
        : null
    );
    render(newArr);
  }
});
elForm.addEventListener("keyup", (e) => {
  e.preventDefault();
  sectionCenter.innerHTML = null;

  let newArr = menu.filter((item) =>
    item.category.toLowerCase().includes(elInput.value.toLowerCase().trim())
      ? item
      : null
  );

  render(newArr);
});
let allBtn = document.getElementById("all");
let breakBtn = document.getElementById("breakfast");
let lunchBtn = document.getElementById("lunch");
let shakesBtn = document.getElementById("shakes");

allBtn.addEventListener("click", () => {
  sectionCenter.innerHTML = null;
  let newArr = menu.map((value, index, array) => {
    let html = `<article class="menu-item">
    <img src=${value.img} alt=${value.title} class="photo" />
    <div class="item-info">
      <header>
        <h4>${value.title}</h4>
        <h4 class="price">$${value.price}</h4>
      </header>
      <p class="item-text">
        ${value.desc}
      </p>
    </div>
  </article>`;

    sectionCenter.insertAdjacentHTML("beforeend", html);
  });
  render(newArr);
});

breakBtn.addEventListener("click", () => {
  sectionCenter.innerHTML = null;
  let newArr = menu.filter((element) =>
    element.category == breakfast.value ? element : null
  );
  render(newArr);
});
lunchBtn.addEventListener("click", () => {
  sectionCenter.innerHTML = null;
  let newArr = menu.filter((element) =>
    element.category == lunch.value ? element : null
  );
  render(newArr);
});
shakesBtn.addEventListener("click", () => {
  sectionCenter.innerHTML = null;
  let newArr = menu.filter((element) =>
    element.category == shakes.value ? element : null
  );
  render(newArr);
});



// Select
let select = document.getElementById("select");

select.addEventListener("change", () => {
  sectionCenter.innerHTML = null;
  if (select.value == "all") {
    render(menu);
  }else if(select.value == 'breakfast'){
    sectionCenter.innerHTML = null;
  let newArr = menu.filter((element) =>
    element.category == select.value ? element : null
  );
  render(newArr);
  }else if(select.value == 'lunch'){
    sectionCenter.innerHTML = null;
  let newArr = menu.filter((element) =>
    element.category == select.value ? element : null
  );
  render(newArr);
  }else if(select.value == 'shakes'){
    sectionCenter.innerHTML = null;
  let newArr = menu.filter((element) =>
    element.category == select.value ? element : null
  );
  render(newArr);
  }
});








// select.addEventListener("change", function (e) {
//   let displayMenu = menu.map(function (item) {
    
//     if (item.category === e.target.value) {
//       return `<article class="menu-item">
//           <img src=${item.img} alt=${item.title} class="photo" />
//           <div class="item-info">
//             <header>
//               <h4>${item.title}</h4>
//               <h4 class="price">$${item.price}</h4>
//             </header>
//             <p class="item-text">
//               ${item.desc}
//             </p>
//           </div>
//         </article>`;
//     }

    
//   });
//   displayMenu = displayMenu.join("");
//   sectionCenter.innerHTML = displayMenu;

// })





// window.addEventListener("DOMContentLoaded", function () {
//   let displayMenu = menu.map(function (item) {
    
   
//       return `<article class="menu-item">
//           <img src=${item.img} alt=${item.title} class="photo" />
//           <div class="item-info">
//             <header>
//               <h4>${item.title}</h4>
//               <h4 class="price">$${item.price}</h4>
//             </header>
//             <p class="item-text">
//               ${item.desc}
//             </p>
//           </div>
//         </article>`;
    
    
//   });
//   displayMenu = displayMenu.join("");
//   sectionCenter.innerHTML = displayMenu;
// });

// const all = document.getElementById('all')
// const breakfast = document.getElementById("breakfast")
// const lunch = document.getElementById("lunch")
// const shakes = document.getElementById("shakes")
// const input = document.getElementById("input")
// const form= document.getElementById("form")

// breakfast.addEventListener("click", ()=> {
//   let displayMenu = menu.map(function (item) {
    
//     if (item.category === "breakfast") {
//       return `<article class="menu-item">
//           <img src=${item.img} alt=${item.title} class="photo" />
//           <div class="item-info">
//             <header>
//               <h4>${item.title}</h4>
//               <h4 class="price">$${item.price}</h4>
//             </header>
//             <p class="item-text">
//               ${item.desc}
//             </p>
//           </div>
//         </article>`;
//     }

    
//   });
//   displayMenu = displayMenu.join("");
//   // console.log(displayMenu);

//   sectionCenter.innerHTML = displayMenu;

// })
// all.addEventListener("click", ()=> {
//   let displayMenu = menu.map(function (item) {
    
//     if (item.category) {
//       return `<article class="menu-item">
//           <img src=${item.img} alt=${item.title} class="photo" />
//           <div class="item-info">
//             <header>
//               <h4>${item.title}</h4>
//               <h4 class="price">$${item.price}</h4>
//             </header>
//             <p class="item-text">
//               ${item.desc}
//             </p>
//           </div>
//         </article>`;
//     }

    
//   });
//   displayMenu = displayMenu.join("");
//   // console.log(displayMenu);

//   sectionCenter.innerHTML = displayMenu;

// })
// shakes.addEventListener("click", ()=> {
//   let displayMenu = menu.map(function (item) {
    
//     if (item.category === "shakes") {
//       return `<article class="menu-item">
//           <img src=${item.img} alt=${item.title} class="photo" />
//           <div class="item-info">
//             <header>
//               <h4>${item.title}</h4>
//               <h4 class="price">$${item.price}</h4>
//             </header>
//             <p class="item-text">
//               ${item.desc}
//             </p>
//           </div>
//         </article>`;
//     }

    
//   });
//   displayMenu = displayMenu.join("");
//   // console.log(displayMenu);

//   sectionCenter.innerHTML = displayMenu;

// })
// lunch.addEventListener("click", ()=> {
//   let displayMenu = menu.map(function (item) {
    
//     if (item.category === "lunch") {
//       return `<article class="menu-item">
//           <img src=${item.img} alt=${item.title} class="photo" />
//           <div class="item-info">
//             <header>
//               <h4>${item.title}</h4>
//               <h4 class="price">$${item.price}</h4>
//             </header>
//             <p class="item-text">
//               ${item.desc}
//             </p>
//           </div>
//         </article>`;
//     }

    
//   });
//   displayMenu = displayMenu.join("");

//   sectionCenter.innerHTML = displayMenu;

// })

// form.addEventListener("keyup", (e) => {
//   e.preventDefault();
//   if (e.keyCode == 13) {
//     sectionCenter.innerHTML = "";
//     let newArr = menu.filter((element) =>
//       element.category.toLowerCase() == input.value.toLowerCase()
//         ? element
//         : null
//     );
//     render(newArr);
//   }
// });
// form.addEventListener("keyup", (e) => {
//   e.preventDefault();
//   sectionCenter.innerHTML = null;

//   let newArr = menu.filter((item) =>
//     item.category.toLowerCase().includes(input.value.toLowerCase().trim())
//       ? item
//       : null
//   );

//   render(newArr);
// });
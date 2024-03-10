"use strict";

//data store----------------------------------------------
const cardHolder = document.querySelector(".cardHolder");
const cardHolder2 = document.querySelector(".cardHolder2");

const microsoftBtn = document.querySelector(".microsoftBtn");
const modalWindowMicrosoft = document.querySelector(".modalWindowMicrosoft");

const signInBtn = document.querySelector(".signInBtn");
const cancelBtn = document.querySelector(".cancelBtn");
const signInModal = document.querySelector(".signInModal");
const overlay = document.querySelector(".overlay");

const carousel = document.querySelector(".carousel");
const slider = document.querySelector(".slider");

const swipeLeftBtn = document.querySelector(".swipeLeftBtn");
const swipeRightBtn = document.querySelector(".swipeRightBtn");

const pauseBtn = document.querySelector(".pauseBtn");
const playBtn = document.querySelector(".playBtn");

const backtoTop = document.querySelector(".backtoTop");

let direction;

//mapping for cards part 1--------------------------
const cards = [
  {
    id: 1,
    image: "card1.jpeg",
    title: "Surface Laptop 5",
    Subtitle:
      "Sophisticated style and multitasking speed powered by 12th Gen Intel® Core, with Windows 11.",
    link: "Learn more",
  },
  {
    id: 2,
    image: "card2.webp",
    title: "Xbox Series X",
    Subtitle: "The fastest,most powerful Xbox ever.",
    link: "Shop Xbox Series X",
  },
  {
    id: 3,
    image: "card3.webp",
    title: "Xbox Series S",
    Subtitle: "Next-gen performance in the smallest Xbox ever.",
    link: "Shop Xbox Series S",
  },
  {
    id: 4,
    image: "card4.webp",
    title: "Surface Laptop Studio",
    Subtitle:
      "Flex your creative muscle on the most powerful Surface Laptop. Now available with Windows 11.",
    link: "Learn more",
  },
];

const data = cards.map((ele) => {
  return `<div class="cards">
 <img src="${ele.image}" alt="" style="background-size:cover; width:100%; margin-bottom:1rem">
 <h1 style="font-size:1.5rem;font-weight:500; margin-bottom:0.5rem">${ele.title}</h1>
 <p style=" margin-bottom:1rem">${ele.Subtitle}</p>
 <a style="color:#0067b8; font-weight:600" href="">${ele.link} <span><i
 class="fa-solid fa-chevron-right"></i></span></a>
</div>`;
});

cardHolder.innerHTML = data.join(" ");

//mapping for cards part 2---------------------------------
const cards2 = [
  {
    id: 1,
    image: "card2.1.avif",
    title: "Surface for Business",
    Subtitle: "No matter what you do, there’s a Surface to help you do it.",
    link: "Shop more",
  },
  {
    id: 2,
    image: "card2.2.jpeg",
    title: "Windows 11 for business",
    Subtitle:
      "Designed for hybrid work. Powerful for employees. Consistent for IT. Secure for all.",
    link: "Learn more",
  },
  {
    id: 3,
    image: "card2.3.webp",
    title: "Get Microsoft Teams for free",
    Subtitle:
      "Online meetings, chat and shared cloud storage – all in one place.",
    link: "Sign up for free",
  },
  {
    id: 4,
    image: "card2.4.webp",
    title: "Visual Studio 2022",
    Subtitle:
      " Get the most comprehensive IDE for .NET and C++ developers on Windows for building web, cloud, desktop, mobile apps, services and games. ",
    link: "Download Visual Studio 2022",
  },
];

const data2 = cards2.map((ele) => {
  return `<div class="cards2">
  <img src="${ele.image}" alt="" style="background-size:cover; width:100%; margin-bottom:1rem">
  <h1 style="font-size:1.5rem;font-weight:500; margin-bottom:0.5rem ">${ele.title}</h1>
  <p style=" margin-bottom:1.3rem">${ele.Subtitle}</p>
  <a style="color:#0067b8; font-weight:600" href="">${ele.link} <span><i
  class="fa-solid fa-chevron-right"></i></span></a>
 </div>`;
});

cardHolder2.innerHTML = data2.join(" ");

//microsoft button event listening-----------------------------------

microsoftBtn.addEventListener("click", function () {
  modalWindowMicrosoft.classList.toggle("hidden");
});

//sign in button event listening-------------------------------------------

signInBtn.addEventListener("click", function () {
  signInModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

//close button eventlistening-------------------------------------------
cancelBtn.addEventListener("click", function () {
  signInModal.classList.add("hidden");
  overlay.classList.add("hidden");
});

//next button event listening-------------------------------------------------

swipeRightBtn.addEventListener("click", function () {
  console.log("swipe right");

  direction = -1;
  carousel.style.justifyContent = "flex-start";
  slider.style.transform = "translate(-50%)";
});

//previous button event listening----------------------------------------
swipeLeftBtn.addEventListener("click", function () {
  console.log("swipe left");
  if (direction === -1) {
    slider.appendChild(slider.firstElementChild);
    direction = 1;
  }
  direction = 1;
  carousel.style.justifyContent = "flex-end";
  slider.style.transform = "translate(50%)";
});

//transition-end event listening-----------------------------------------
slider.addEventListener("transitionend", function () {
  if (direction === -1) {
    slider.appendChild(slider.firstElementChild);
  } else if (direction === 1) {
    slider.prepend(slider.lastElementChild);
  }
  slider.style.transition = "none";
  slider.style.transform = "translate(0)";

  setTimeout(function () {
    slider.style.transition = "all 0.5s";
  });
});
//back to top button event listening--------------
backtoTop.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
});

const autoPlay = function () {
  direction = -1;
  carousel.style.justifyContent = "flex-start";
  slider.style.transform = "translate(-50%)";
};
const auto = setInterval(autoPlay, 5000);

playBtn.addEventListener("click", function () {
  pauseBtn.classList.remove("hidden");
  playBtn.classList.add("hidden");
  setInterval(autoPlay, 5000);
});
pauseBtn.addEventListener("click", function () {
  pauseBtn.classList.add("hidden");
  playBtn.classList.remove("hidden");
  clearInterval(auto);
});

// toggle class active

const navbarNav = document.querySelector(".rl-navbar-nav");
// ketika humberger manu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// toggle class
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// klik di luar side bar

const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = () => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// detail

const modal = document.getElementById("item-detail-modal");
const detailButtons = document.querySelectorAll(".item-detail-btn");
const closeModal = document.querySelector(".modal-close");

detailButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    document.getElementById("modal-img").src = btn.dataset.img;
    document.getElementById("modal-title").innerText = btn.dataset.title;
    document.getElementById("modal-desc").innerText = btn.dataset.desc;
    document.getElementById("modal-price").innerText = btn.dataset.price;

    modal.classList.add("active");
    feather.replace(); // refresh icon
  });
});
if (closeModal && modal) {
closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});
}

// grating

document.addEventListener("DOMContentLoaded", function () {
  const greetingEl = document.getElementById("rl-navbar-greeting");
  const clockEl = document.getElementById("rl-navbar-clock");

  if (!greetingEl || !clockEl) return;

  function updateTime() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes().toString().padStart(2, "0");
    const second = now.getSeconds().toString().padStart(2, "0");

    let greeting = "";

    if (hour >= 5 && hour <= 11) {
      greeting = "Selamat Pagi";
    } else if (hour >= 12 && hour <= 14) {
      greeting = "Selamat Siang";
    } else if (hour >= 15 && hour <= 17) {
      greeting = "Selamat Sore";
    } else {
      greeting = "Selamat Malam";
    }

    greetingEl.textContent = greeting + "  ";
    clockEl.textContent = `${hour}:${minute}:${second}`;
  }

  updateTime();
  setInterval(updateTime, 1000);
});

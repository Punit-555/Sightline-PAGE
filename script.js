window.addEventListener("load", updateHeaderNavHeight);
window.addEventListener("resize", updateHeaderNavHeight);

var headerNavElement = document.querySelector("body > header > nav");
var headerNavStyleElement = document.createElement("style");
document.head.appendChild(headerNavStyleElement);

function updateHeaderNavHeight() {
  var h = headerNavElement.offsetHeight;

  headerNavStyleElement.innerText =
    "header::before { height:" +
    h +
    "px }" +
    "header { margin-bottom:" +
    -h +
    "px }" +
    "#main-content { padding-top:" +
    h +
    "px }";
}

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navList = document.querySelector("nav ul");

  menuIcon.addEventListener("click", function () {
    navList.classList.toggle("active");
    if (navList.classList.contains("active")) {
      menuIcon.innerHTML = "&#10005;";
    } else {
      menuIcon.innerHTML = "&#9776;";
    }
  });
});

const infoIcon = document.getElementById("infoIcon");
const infoModal = document.getElementById("infoModal");

infoIcon.addEventListener("click", () => {
  infoModal.showModal();
});

document.getElementById("closeModal").addEventListener("click", () => {
  infoModal.close();
});

/*For Modal*/
const showModalBtn = document.querySelector("#show-modal");
const modalContainer = document.querySelector("#example-modal");

function showModal() {
  modalContainer.style.display = "flex";
}

function closeModal() {
  modalContainer.style.display = "none";
}

showModalBtn.addEventListener("click", showModal);
modalContainer.addEventListener("click", closeModal);

/*For Snackbar*/
const btnBaseline = document.getElementById("btn-baseline");
const btnLeading = document.getElementById("btn-leading");
const btnStacked = document.getElementById("btn-stacked");
const snackBtnClose = document.querySelectorAll(".fa-close");

function hideAllSnack() {
  const allSnacks = document.querySelectorAll(".snack-container");
  allSnacks.forEach((snack) => {
    snack.style.display = "none";
  });
}

btnBaseline.addEventListener("click", () => {
  hideAllSnack();
  document.querySelector(".snack-baseline").style.display = "flex";
  return;
});
btnLeading.addEventListener("click", () => {
  hideAllSnack();
  document.querySelector(".snack-leading").style.display = "flex";
});
btnStacked.addEventListener("click", () => {
  hideAllSnack();
  document.querySelector(".snack-stacked").style.display = "flex";
});

snackBtnClose.forEach((closeBtn) =>
  closeBtn.addEventListener("click", hideAllSnack)
);

hideAllSnack();

/* Componesation for fixed header navigation */

var shiftWindow = function () { scrollBy(0, -50) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);

/* For Side Nav on small width screens */

function toggleSideNavBar() {
  if (sideNav.classList.contains("fixed-side-nav")) {
    sideNav.style.display = "none";
    sideNav.classList.remove("fixed-side-nav");
  }
  else {
    sideNav.style.display = "flex";
    sideNav.classList.add("fixed-side-nav");
  }
}

window.addEventListener("resize", () => {
  sideNav.style.removeProperty("display"); sideNav.classList.remove("fixed-side-nav");
});

const navHamburger = document.getElementById("navHamburger");
const sideNav = document.getElementById("sideNav");
navHamburger.addEventListener("click", toggleSideNavBar)
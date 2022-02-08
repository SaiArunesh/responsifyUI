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

const shiftWindow = () => scrollBy(0, -50);

window.addEventListener("hashchange", shiftWindow);

/* For Side Nav on small width screens */

const toggleSideNavBar = () => {
  if (sideNav.style.display !== "none") {
    sideNav.style.display = "none";
    mainSec.style.visibility = "visible";
  }
  else {
    sideNav.style.display = "flex";
    mainSec.style.visibility = "hidden";
  }
}

const resetSideNav = () => {
  sideNav.style.removeProperty("display");
  mainSec.style.visibility = "visible";
}
window.addEventListener("resize", resetSideNav);

const navHamburger = document.getElementById("navHamburger");
const sideNav = document.getElementById("sideNav");
const mainSec = document.querySelector(".main-section");
navHamburger.addEventListener("click", toggleSideNavBar)
sideNav.addEventListener("click", resetSideNav);

/* For Rating */

const ratingContainers = document.querySelectorAll(".rating-container");
const stars = document.querySelectorAll(".star");

const inActiveStarClasses = "fa fa-star-o star";
const activeStarClasses = "fa fa-star star star-active";
const hoverStarClasses = "fa fa-star star star-hover";

function findStarsIndex(starElement) {
  const parentRatingContainer = starElement.parentElement;
  const faStars = parentRatingContainer.querySelectorAll(".star");
  let index = 0;

  for (let star of faStars) {
    if (starElement === star)
      break;
    index++;
  }

  return [index, faStars];
}

function ratingHover(event) {
  let [index, faStars] = findStarsIndex(event.target);

  for (let i = 0; i <= index; i++) {
    if (faStars[i].className !== activeStarClasses)
      faStars[i].className = hoverStarClasses;
  }

  index++;
  for (let i = index; i < faStars.length; i++) {
    if (faStars[i].className === hoverStarClasses) {
      faStars[i].className = inActiveStarClasses;
    }
  }
}

function resetAllStarHover(event) {
  const faStars = event.target.querySelectorAll(".star");
  for (faStar of faStars) {
    if (faStar.className !== activeStarClasses) {
      faStar.className = inActiveStarClasses;
    }
  }
}

function ratingClick(event) {
  let [index, faStars] = findStarsIndex(event.target);
  for (let i = 0; i <= index; i++) {
    faStars[i].className = activeStarClasses;
  }
  index++;

  for (let i = index; i < faStars.length; i++) {
    if (faStars[i].className === activeStarClasses) {
      faStars[i].className = inActiveStarClasses;
    }
  }
}

function resetAllStars() {
  const parentRatingContainer = event.target.parentElement;
  const faStars = parentRatingContainer.querySelectorAll(".star");
  for (let star of faStars) {
    star.className = inActiveStarClasses;
  }
}

stars.forEach((star) => {
  star.addEventListener("mouseover", ratingHover);
  star.addEventListener("click", ratingClick);
  star.addEventListener("dblclick", resetAllStars);

});

ratingContainers.forEach((ratingContainer) =>
  ratingContainer.addEventListener("mouseleave", resetAllStarHover)
)

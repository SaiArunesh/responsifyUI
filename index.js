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

/* For Rating */

// const ratingContainers = document.querySelectorAll(".rating-container");

// const stars = document.querySelectorAll(".star");

// function ratingHover(event) {
//   const parentRatingContainer = event.target.parentElement;
//   const faStars = parentRatingContainer.querySelectorAll(".star");

//   faStars.forEach((faStar, index) => {
//     faStar.classList.remove("fa-star-o");
//     faStars.forEach((faStar, i) => {
//       if (i <= index) faStar.classList.add("fa-star");
//     });
//   });
// }

// function ratingClick(event) {
//   console.log(event.target);
// }

// stars.forEach((star) => {
//   console.log("1");
//   star.addEventListener("mouseover", ratingHover);
//   star.addEventListener("click", ratingClick);
// });


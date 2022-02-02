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

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

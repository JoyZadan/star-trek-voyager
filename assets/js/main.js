// SETTING VARIABLES TO TARGET MODAL
// Based on FlorinPop YouTube tutorial, Create a Modal - https://www.youtube.com/watch?v=XH5OW46yO8I
const openModal = document.getElementById("open-modal");
const modalContainer = document.getElementById("modal-container");
const closeModal = document.getElementById("close-modal");

// OPENS THE MODAL POPOP
openModal.addEventListener("click", () => {
    modalContainer.classList.add("show");
});

// CLOSES THE MODAL POPOP
closeModal.addEventListener("click", () => {
    modalContainer.classList.remove("show");
});
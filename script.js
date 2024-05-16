
let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");

// let close = document.querySelector("#close");
const openModal = () => {
    modal.classList.add("active");
    overlay.classList.add("overlayActive");
}

const CloseModal = () => {
    // close.classList.remove("active")
    modal.classList.remove("active");
    overlay.classList.remove("overlayActive");
}
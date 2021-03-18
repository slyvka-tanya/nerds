const modalButton = document.querySelector(".footer-contact-button");
const popup = document.querySelector(".form");
const buttonClose = document.querySelector(".form-button-close");

popup.classList.add("modal-close");

modalButton.addEventListener("click", function(){
    popup.classList.add("modal-show");
}
);

buttonClose.addEventListener("click", function() {
   popup.classList.remove("modal-show");
});
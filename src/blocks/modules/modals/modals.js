import MicroModal from "micromodal";

MicroModal.init({
    closeTrigger: "data-custom-close",
    disableScroll: true,
    onShow: (modal) => {
        const input = modal.querySelector("input");
        input.focus();
    },
});

const closeModalBtns = document.querySelectorAll(".modal__close");

closeModalBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
        this.closest(".modal").classList.remove("is-open");
    });
});

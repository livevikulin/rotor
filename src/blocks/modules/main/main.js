import Swiper, { Thumbs } from "swiper";
import SwiperCore, { Navigation, Pagination } from "swiper/core";

SwiperCore.use([Navigation, Pagination]);

const pageSliders = document.querySelectorAll(".page-slider");

if (pageSliders) {
    pageSliders.forEach((pageSlider) => {
        const slider = new Swiper(pageSlider, {
            slidesPerView: "auto",
            speed: 1000,
            spaceBetween: 32,
            pagination: {
                el: ".swiper-pagination",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    });
}

//видео
const btnPlayVideo = document.querySelectorAll(".js-video");

if (btnPlayVideo) {
    btnPlayVideo.forEach((item) => {
        item.addEventListener("click", function () {
            this.style.display = "none";
            console.log(this.nextSibling);
            this.nextElementSibling.play();
        });
    });
}

//Табы
let tabBtn = document.querySelectorAll(".tabs__nav-button");

tabBtn.forEach(function (item, i) {
    item.addEventListener("click", function (e) {
        e.preventDefault();
        let tabName = this.dataset.tab,
            tabContent = document.querySelector(`#${tabName}`);
        console.log(tabName);
        document
            .querySelectorAll(".tabs__item.active-tab")
            .forEach(function (item, i) {
                item.classList.remove("active-tab");
            });

        document
            .querySelectorAll(".tabs__nav-button.active-tab")
            .forEach(function (item, i) {
                item.classList.remove("active-tab");
            });

        tabContent.classList.add("active-tab");
        this.classList.add("active-tab");
    });
});

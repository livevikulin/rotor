import Swiper, { Thumbs } from 'swiper'
import SwiperCore, { Navigation, Pagination, Mousewheel, Controller } from 'swiper/core'
import anime from 'animejs/lib/anime.es.js'

SwiperCore.use([Navigation, Pagination, Mousewheel, Controller])

//Табы
let tabBtn = document.querySelectorAll(".js-tabs-btn");

tabBtn.forEach(function(item, i) {
	item.addEventListener("click", function(e) {
		e.preventDefault();
		let tabName = this.dataset.slider,
			tabContent = document.querySelector(`#${tabName}`)
		document.querySelectorAll(".slider-tab-item.active-tab").forEach(function(item, i){
			item.classList.remove("active-tab")
		});

		document.querySelectorAll(".slider-tabs__btn.active-tab").forEach(function(item, i){
			item.classList.remove("active-tab")
		});

		tabContent.classList.add("active-tab")
		this.classList.add("active-tab")
	})
})

const tabItems = document.querySelectorAll('.slider-tab-item')
const tabSlidersAnimating = []

tabItems.forEach((tab) => {
	const sliderLargeEl = tab.querySelector('.slider-first-tab-1'); // Большой (или первый или основной) слайдер текущего таба
	if (sliderLargeEl === null) {
		return
	}
	const sliderSmallEl = tab.querySelector('.slider-two-tab-2'); // Маленький (или второй или дополнительный) слайдер текущего таба
	if (sliderSmallEl === null) {
		return
	}

	const sliderLargeInstance = new Swiper(sliderLargeEl, {
		slidesPerView: 1,
		speed:1000,
		loopAdditionalSlides: 10,
		//mousewheel: true,
		navigation: {
			nextEl: ".slider-arrows__next",
			prevEl: ".slider-arrows__prev"
		},
		watchSlidesProgress: true
	})

	const sliderSmallInstance = new Swiper(sliderSmallEl, {
		slidesPerView: 1,
		spaceBetween: 40,
		speed:1000,
		//mousewheel: true,
		pagination: {
			el: ".slider-pagination",
			type: "fraction",
			renderFraction: ( currentClass, totalClass ) => {
				return `<span class="${ currentClass }">0</span>
						<div class="swiper-pagination-line">
							<span class="swiper-line-animation">—</span>
						</div>
						<span class="${ totalClass }">0</span>`
			},
			formatFractionCurrent: addZero,
			formatFractionTotal: addZero
		}
	})

	//Передача управления слайдерами
	sliderLargeInstance.controller.control = sliderSmallInstance
	sliderSmallInstance.controller.control = sliderLargeInstance

	tabSlidersAnimating.push(sliderLargeInstance)

	const animationOptionsPrev = () => {
		const slideActive = tab.querySelector('.swiper-slide-active')
		const slideActiveImg = slideActive.querySelector('.slide-img')
		const slideActiveCaption = slideActive.querySelector('.caption-slide')
		const paginationCurrent = tab.querySelector('.swiper-pagination-current')
		const paginationLine = tab.querySelector('.swiper-line-animation')
	
		anime({
			targets: slideActiveImg,
			translateX: ['-100%', 0],
			scale: [1.3, 1],
			delay: 300,
			duration: 1000,
			easing: 'easeInOutQuad',
			direction: 'normal'
		})
	
		anime({
			targets: slideActiveCaption,
			translateX: ['-100%', 0],
			delay: 500,
			duration: 700,
			easing: 'easeInOutSine',
			direction: 'normal'
		})
	
		anime({
			targets: paginationCurrent,
			translateY: ['-100%', 0],
			delay: 0,
			duration: 500,
			easing: 'easeInOutSine',
			direction: 'normal'
		})
	
		anime({
			targets: paginationLine,
			translateX: ['-100%', 0],
			delay: 0,
			duration: 500,
			easing: 'easeInOutSine',
			direction: 'normal'
		})
	}
	
	const animationOptionsNext = () => {
		const slideActive = tab.querySelector('.swiper-slide-active')
		const slideActiveImg = slideActive.querySelector('.slide-img')
		const slideActiveCaption = slideActive.querySelector('.caption-slide')
		const paginationCurrent = tab.querySelector('.swiper-pagination-current')
		const paginationLine = tab.querySelector('.swiper-line-animation')
	
		anime({
			targets: slideActiveImg,
			translateX: ['100%', 0],
			scale: [1.3, 1],
			delay: 300,
			duration: 1000,
			easing: 'easeInOutQuad',
			direction: 'normal'
		})
	
		anime({
			targets: slideActiveCaption,
			translateX: ['100%', 0],
			delay: 500,
			duration: 700,
			easing: 'easeInOutSine',
			direction: 'normal'
		})
	
		anime({
			targets: paginationCurrent,
			translateY: ['-100%', 0],
			delay: 0,
			duration: 500,
			easing: 'easeInOutSine',
			direction: 'normal'
		})
	
		anime({
			targets: paginationLine,
			translateX: ['-100%', 0],
			delay: 0,
			duration: 500,
			easing: 'easeInOutSine',
			direction: 'normal'
		})
	}

	tabSlidersAnimating.forEach((slider) => {
		slider.on('slidePrevTransitionStart', animationOptionsPrev)
		slider.on('slideNextTransitionStart', animationOptionsNext)
	})
})

//Добавляем 0 в начало в пагинации
function addZero(num){
	return (num > 9) ? num : '0' + num;
}

const tabsBtnFirst = document.querySelector('[data-slider="slider-tab-1"]')
const tabsBtnTwo = document.querySelector('[data-slider="slider-tab-2"]')
const mainSliderBgTwo = document.querySelector('.main-slider__bg--two')
const firstSliderBgTwo = document.querySelector('.slider-first__bg--two')
const twoSliderBgTwo = document.querySelector('.slider-two__bg--two')
const mainSliderBgFirst = document.querySelector('.main-slider__bg--first')

if ( tabsBtnFirst ) {
	tabsBtnFirst.addEventListener('click', () => {
		anime({
			targets: mainSliderBgTwo,
			width: '100%',
			delay: 0,
			duration: 1500,
			easing: 'easeInOutSine',
			direction: 'normal'
		})
		anime({
			targets: firstSliderBgTwo,
			width: 160,
			delay: 500,
			duration: 1000,
			easing: 'easeInOutSine',
			direction: 'normal'
		})
		anime({
			targets: twoSliderBgTwo,
			width: '100%',
			delay: 1000,
			duration: 1000,
			easing: 'easeInOutSine',
			direction: 'normal'
		})
	})
}

if ( tabsBtnTwo ) {
	tabsBtnTwo.addEventListener('click', () => {
		anime({
			targets: mainSliderBgTwo,
			width: '0%',
			delay: 0,
			duration: 1500,
			easing: 'easeInOutSine',
			direction: 'normal'
		})
		anime({
			targets: firstSliderBgTwo,
			width: 0,
			delay: 800,
			duration: 1000,
			easing: 'easeInOutSine',
			direction: 'normal'
		})
		anime({
			targets: twoSliderBgTwo,
			width: 0,
			delay: 300,
			duration: 1000,
			easing: 'easeInOutSine',
			direction: 'normal'
		})
		anime({
			targets: mainSliderBgFirst,
			width: '100%',
			delay: 0,
			duration: 1500,
			easing: 'easeInOutSine',
			direction: 'normal'
		})
	})
}
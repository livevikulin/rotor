import Swiper from 'swiper'
import SwiperCore, { Navigation, Pagination, Thumbs, EffectFade } from 'swiper/core'

SwiperCore.use([Navigation, Pagination, Thumbs, EffectFade])

const sliderSmall = document.querySelector('.js-slider-small')
const sliderBig = document.querySelector('.js-slider-main')

if ( sliderSmall ) {
	let productSliderSmall = new Swiper(sliderSmall, {
		slidesPerView: 4,
		spaceBetween: 20,
		speed:500,
		direction: "horizontal",
		breakpoints: {
			1280: {
				slidesPerView: 4,
				spaceBetween: 48,
				direction: "vertical",
			}
		}
	})
	
	let productSliderMain = new Swiper(sliderBig, {
		speed:1000,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		thumbs: {
			swiper: productSliderSmall
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		}
	})

	productSliderSmall.update()
}

const productPage = document.querySelector('.product')

if ( document.documentElement.clientWidth < 768) {
	if ( productPage ) {
		const productBtn = productPage.querySelector('.card-list-btn span')
		productBtn.textContent = 'В корзину'
	}
}
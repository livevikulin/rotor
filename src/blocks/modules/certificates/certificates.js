import Swiper, { Thumbs } from 'swiper'
import SwiperCore, { Navigation, Pagination} from 'swiper/core'
import GLightbox from 'glightbox'

SwiperCore.use([Navigation, Pagination])

const sliderLargeInstance = new Swiper('.certificates__slider', {
	slidesPerView: 'auto',
	spaceBetween: 47,
	speed:1000,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	}
})

const lightbox = GLightbox()

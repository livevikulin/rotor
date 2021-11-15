import Swiper, { Thumbs } from 'swiper'
import SwiperCore, { Navigation, Pagination} from 'swiper/core'

SwiperCore.use([Navigation, Pagination])

const catalogSlider = document.querySelector('.catalog-slider')

if ( catalogSlider ) {
	const catalogSliderMain = new Swiper(catalogSlider, {
		slidesPerView: 1,
		spaceBetween: 0,
		speed:1000,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		},
		breakpoints: {
			992: {
			  slidesPerView: 2,
			  spaceBetween: 64
			}
		}
	})
}

//Перестроение навигации в адаптиве
const catalogNav = document.querySelector('.catalog-nav')
const catalogWrap = document.querySelector('.catalog-wrap')

if ( document.documentElement.clientWidth < 1280) {
	if ( catalogWrap ) {
		const breadcrumbsCatalog = catalogWrap.querySelector('.breadcrumbs')
		breadcrumbsCatalog.after(catalogNav)
	}
	
}






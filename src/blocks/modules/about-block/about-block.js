import Swiper, { Thumbs } from 'swiper'
import SwiperCore, { Navigation, Pagination, Mousewheel, Controller } from 'swiper/core'

let animationItems = document.querySelectorAll('.animation-img')

if ( animationItems ) {
	const animScroll = function() {
		animationItems.forEach( (animationItem) => {
			const animItem = animationItem
			const animItemHeight = animItem.offsetHeight
			const animItemOffset = offset(animItem).top
			const animStart = 2

			let animItemPoint = window.innerHeight - animItemHeight / animStart

			if ( animItemHeight > window.innerHeight ) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart
			}

			if ( (pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight) ) {
				animItem.classList.add('anim-img')
			}
		})
	}

	const offset = (element) => {
		const rect = element.getBoundingClientRect(),
			  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			  scrollTop = window.pageYOffset || document.documentElement.scrollTop

		return { 
				 top: rect.top + scrollTop,
				 left: rect.left + scrollLeft
			   }
	}

	window.addEventListener('scroll', animScroll)
}

if (document.documentElement.clientWidth < 768) {
	if ( document.querySelector('.about-slider') ) {
		const sliderAbout = new Swiper('.about-slider', {
			slidesPerView: 'auto',
			spaceBetween: 24,
			speed:1000
		})
	}
}




let productionsTabBtn = document.querySelectorAll(".js-productions-tab-btn");

productionsTabBtn.forEach(function(item, i) {
	item.addEventListener("mouseenter", function(e) {
		e.preventDefault();
		let tabName = this.dataset.productions,
			tabContent = document.querySelector(`#${tabName}`)
		document.querySelectorAll(".productions__content-item.active-tab").forEach(function(item, i){
			item.classList.remove("active-tab")
		});

		tabContent.classList.add("active-tab")
	})
})

const animateCursor = (selector, animate) => {
	const animateBlock = document.querySelector(selector)
	if ( animateBlock ) {
		const link = animateBlock.querySelectorAll('.hover-this')
		const cursor = animateBlock.querySelector('.cursor')

		const animateIt = function (e, link) {
			const span = link.querySelector('span'),
				spanRect = span.getBoundingClientRect()

			const { offsetX: x, offsetY: y } = e,
				{ offsetWidth: width, offsetHeight: height } = link,
				move = 25,
				xMove = Math.round(x / width * (move * 2) - move),
				yMove = Math.round(y / height * (move * 2) - move)
			
			span.style.transform = `translate( ${ xMove }px, ${ yMove }px)`
			span.style.setProperty('--x',Math.round(e.x - xMove)+'px')
			span.style.setProperty('--y',Math.round(e.y - yMove)+'px')
			if (e.type === 'mouseleave') 
				span.style.transform = ''
		}
		
		const editCursor = (e) => {
			const { clientX: x, clientY: y } = e
			cursor.style.left = x + 'px'
			cursor.style.top = y + 'px'
		}
		
		link.forEach(b => b.addEventListener('mousemove', function(e) {
			if ( animate ) {
				animateIt(e, b)
			} 

			b.closest(selector).classList.add('show-cursor')
		}))
		link.forEach(b => b.addEventListener('mouseleave', function(e) {
			if ( animate ) {
				animateIt(e, b)
			} 

			b.closest(selector).classList.remove('show-cursor')
		}))


		window.addEventListener('mousemove', editCursor)
	}
}
animateCursor('.productions', true)
animateCursor('.main-slider', false)
animateCursor('.news-page', false)


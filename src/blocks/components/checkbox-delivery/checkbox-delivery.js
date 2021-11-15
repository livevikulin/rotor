let radios = document.querySelectorAll('.checkbox-delivery')

if ( radios ) {
	radios.forEach( (radio) => {	
		radio.addEventListener('click', function() {
			radios.forEach( (i) => {
				i.classList.remove('active-checkbox')
			})
			this.classList.add('active-checkbox')
		})
	})
}
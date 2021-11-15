const rebuild = document.querySelector('.rebuilding')
const buttons = document.querySelectorAll('.rebuilding__item')
const catalogCards = document.querySelector('.card-items')

if ( rebuild ) {
	rebuild.addEventListener('click', (event) => {
		event.preventDefault()
		const { target } = event
		const rebuildButton = target.closest('.rebuilding__item')
		const dataRebuild = rebuildButton.dataset.rebuld
	
		buttons.forEach( (button) => {
			button.classList.remove('active')
		})
	
		if ( rebuildButton ) {
			dataRebuild === 'list'
				? catalogCards.classList.add('cards-list')
				: catalogCards.classList.remove('cards-list')
	
			rebuildButton.classList.add('active')
		}
	})
}
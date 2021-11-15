class AccordionItem {
    constructor(item, activeClass = 'accordion-active') {
        this.item = item
        this.button = this.item.querySelector('.js-accordion-button')
        this.content = this.item.querySelector('.js-accordion-content')
		this.buttonRotate = this.button.querySelector('span')
        this.isActive = false
        this.activeClass = activeClass
    }
    toggle = () => {
        this.isActive ? this.close() : this.open()
    }
    close = () => {
        this.item.classList.remove(this.activeClass)
		this.content.style.maxHeight = null
        this.isActive = false
		this.buttonRotate.textContent = 'Смотреть'
    }
	
    open = () => {
        this.item.classList.add(this.activeClass)
		this.content.style.maxHeight = this.content.scrollHeight + "px"
        this.isActive = true
		this.buttonRotate.textContent = 'Свернуть'
    }
}

class Accordion {
    constructor(parentSelector, activeClass) {
        this.accordionItem = document.querySelector(parentSelector)
        this.items = this.accordionItem.querySelectorAll('.js-accordion-item')
        this.activeInstance = null
        this.activeClass = activeClass
        this.init()
    }
    init = () => {
        this.items.forEach( (item) => {
            const itemInstance = new AccordionItem(item, this.activeClass)
            itemInstance.button.addEventListener('click', () => {
                // if ( this.activeInstance !== null ) {
                //     this.activeInstance.toggle()
                // }
                // if ( itemInstance === this.activeInstance ) {
                //     this.activeInstance = null
                //     return
                // }
                itemInstance.toggle()
                this.activeInstance = itemInstance
            })
        })
    }
}

document.querySelectorAll('.js-accordion-item').forEach((item) => {
    if (item) {
        const newAccordion = new Accordion('.js-vacancies', 'vacancies-open')
    }
})


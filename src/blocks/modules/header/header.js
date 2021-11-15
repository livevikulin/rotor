const burgerBtn = document.querySelector('.burger-btn')
const burgerCloseBtn = document.querySelector('.burger-close')
const burgerMenu = document.querySelector('.burger-menu')

if ( burgerBtn ) {
    burgerBtn.addEventListener('click', () => {
        burgerMenu.style.left = '0%'
        document.querySelector('html').style.overflow = 'hidden'
    })
    
    burgerCloseBtn.addEventListener('click', () => {
        burgerMenu.style.left = '-100%'
        document.querySelector('html').style.overflow = 'visible'
    })
}


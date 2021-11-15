const footerBox = document.querySelectorAll('.js-footer-box')

footerBox.forEach( (item) => {
    const footerBoxBtn = item.querySelector('p')

    footerBoxBtn.addEventListener('click', function() {
        this.parentElement.classList.toggle('footer-list-open')
    })
})
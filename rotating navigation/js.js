const openBtn = document.querySelector('.open')
const closeBtn = document.querySelector('.close')
const containerElement = document.querySelector('.container')

openBtn.addEventListener('click', () => {
    containerElement.classList.add('show-nav')
})
closeBtn.addEventListener('click', () => {
    containerElement.classList.remove('show-nav')
})
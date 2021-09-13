const searchBtn = document.querySelector('.btn')
const searchElement = document.querySelector('.search')

searchBtn.addEventListener('click', () => {

    searchElement.classList.toggle('active')
})
const bgLeft = document.querySelector('.left')
const bgRight = document.querySelector('.right')



bgLeft.onmouseover = () => {
    bgLeft.style.width = 75 + '%'
    bgRight.style.width = 25 + '%'

}
bgLeft.onmouseout = () => {
    bgLeft.style.width = 50 + '%'
    bgRight.style.width = 50 + '%'

}
bgRight.onmouseover = () => {
    bgLeft.style.width = 25 + '%'
    bgRight.style.width = 75 + '%'

}
bgRight.onmouseout = () => {
    bgLeft.style.width = 50 + '%'
    bgRight.style.width = 50 + '%'

}
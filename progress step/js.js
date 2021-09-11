const circles = document.querySelectorAll('.circle')
const progress = document.querySelector('#progress')
const nextBtn = document.querySelector('#next')
const prevBtn = document.querySelector('#prev')
let currentActive = 1
nextBtn.addEventListener('click', () => {
    currentActive++
    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    update()
})
prevBtn.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1
    }
    update()
})

function update() {
    circles.forEach((circle, i) => {
        if (i < currentActive) {

            circle.classList.add('active')
        }
        else {
            circle.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active')
    console.log(actives.length, circles.length)

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';
    if (currentActive === 1) {
        prevBtn.disabled = true;
    }
    else if (currentActive === circles.length) {
        nextBtn.disabled = true;

    } else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;

    }

}
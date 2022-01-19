const downButton = document.querySelector('.down-button')
const upButton = document.querySelector('.up-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const mainSlidesCount = mainSlide.querySelectorAll('div').length
const container = document.querySelector('.container')
const 

let activeSlidIndex = 0

sidebar.style.top = `-${(mainSlidesCount - 1) * 100}vh`

downButton.addEventListener('click', () => {
    changeSlide('down')
})

upButton.addEventListener('click', () => {
    changeSlide('up')
})

function changeSlide(direction){
    if (direction === 'up') {
        activeSlidIndex++
        if (activeSlidIndex === mainSlidesCount) {
            activeSlidIndex = 0
        }
    } else if (direction === 'down') {
        activeSlidIndex--
        if(activeSlidIndex < 0){
            activeSlidIndex = mainSlidesCount-1
        }

    }

    const pageHeight = container.clientHeight
    
    mainSlide.style.transform = `translateY(-${activeSlidIndex * pageHeight}px)`

    sidebar.style.transform = `translateY(${activeSlidIndex * pageHeight}px)`

}

container.addEventListener('resize', event => {
    const pageHeight = container.clientHeight
})
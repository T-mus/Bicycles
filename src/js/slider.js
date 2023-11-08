import * as bootstrap from 'bootstrap'

const myCarouselElement = document.querySelector('#bootstrap-slider')

const carousel = new bootstrap.Carousel(myCarouselElement, {
    touch: true,
    keyboard: true,
})

let slider = document.querySelector('.slider'),
    sliderRow = document.querySelector('.slider__row'),
    slides = document.querySelectorAll('.slider__item'),
    sliderWidth,
    dotsWrapper = document.querySelector('.slider__dots'),
    dots = document.querySelectorAll('.slider__dot'),
    x1 = null, x2 = null, moveX = null, xDiff,
    threshold = 100,
    count = 0;

//Todo: Scaling ↓
window.addEventListener('resize', scaling);

function scaling() {
    sliderWidth = slider.offsetWidth;
    sliderRow.style.width = `${sliderWidth * slides.length}px`

    slides.forEach((i) => {
        i.style.width = `${sliderWidth}px`;
        i.style.height = 'auto';
    });
}
scaling();

//Todo: Scroll slider ↓
function scrollSlider() {
    sliderRow.style.transform = `translateX(-${count * sliderWidth}px)`;

    dots.forEach((i) => {i.classList.remove('active-dot')});
    dots[count].classList.add('active-dot');
}

//Todo: Scroll by dots ↓
dotsWrapper.addEventListener('click', function (e) {
    for (let i = 0; i < dots.length; i++) {
        if (e.target.classList.contains('slider__dot') && e.target == dots[i]) {
            scrollBydots(i);
        }
    }
}); 

function scrollBydots(number) {
    count = number;
    scrollSlider();
}

//Todo: Swipe ↓
sliderRow.addEventListener('mousedown', clickStart);
sliderRow.addEventListener('mouseup', clickEnd); 

sliderRow.addEventListener('touchstart', clickStart);
sliderRow.addEventListener('touchend', clickEnd); 

function clickStart(e) {
    if(e.type == 'touchstart') {
        x1 = e.touches[0].clientX;
    }
    else {
        x1 = e.clientX;
    }
}

function clickEnd(e) {
    if(x1 == null) {
        return false;
    }
    else {
        if (e.type == 'touchend') {
            x2 = e.changedTouches[0].clientX;
        }
        else {
            x2 = e.clientX;
        }
 
        xDiff = x2 - x1;

        if(xDiff > threshold) {
            count --;
            if(count < 0) {
                count = slides.length - 1;
            }
            scrollSlider();
        }
        else if(xDiff < -threshold) {
            count ++;
            if(count >= slides.length) {
                count = 0;
            }
            scrollSlider();
        }
    }
    x1 = null;
}






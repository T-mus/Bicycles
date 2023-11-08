// Method IBG(Intro) ↓
function ibg() {
    let ibg = document.querySelectorAll('.ibg');

    for(let i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
   }
}
ibg();

// Header(Burger) ↓
let burger = document.querySelector('.burger-menu'),
    menuBody = document.querySelector('.menu__body'),
    documentBody = document.querySelector('body');

burger.addEventListener('click', function () {
    this.classList.toggle('active');
    menuBody.classList.toggle('active');

    documentBody.classList.toggle('stop');
});

// Header fixed
let header = document.querySelector('.js-header'),
    headerHeight = header.clientHeight,
    scrollPos = window.pageYOffset,
    headerBackground = document.querySelector('.js-header__row');

    window.addEventListener('scroll', function() {
        scrollPos = window.pageYOffset;
        
        if (scrollPos > headerHeight + 35) {
            header.classList.add('fixed');
            headerBackground.classList.add('fixed-background');
                
            menuBody.classList.add('by-scroll');
        }
        else if(scrollPos == 0) {
            header.classList.remove('fixed');
            headerBackground.classList.remove('fixed-background');

            menuBody.classList.remove('by-scroll');
        }
    });

// Navigation ↓
let links = document.querySelectorAll('.js-link');
for (let link of links) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        menuBody.classList.remove('active');
        burger.classList.remove('active');
        documentBody.classList.remove('stop');

        let elmId = this.getAttribute('href'),
            section = document.querySelector('' + elmId);
            
        section.scrollIntoView({
            behavior: 'smooth',
        });              
    });
}


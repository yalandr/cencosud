// NAVIGATION
const scrollToForm = () => {
    document.querySelector('.form').scrollIntoView({behavior:"smooth"})
}
const scrollToTop = () => {
    document.querySelector('.header').scrollIntoView({behavior:"smooth"})
}
const scrollToAbout = () => {
    document.querySelector('.section-about').scrollIntoView({behavior:"smooth"})
}
const scrollToBenefits = () => {
    document.querySelector('.section-benefits').scrollIntoView({behavior:"smooth"})
}
const scrollToOffers = () => {
    document.querySelector('.section-offers').scrollIntoView({behavior:"smooth"})
}
const scrollToSteps = () => {
    document.querySelector('.section-steps').scrollIntoView({behavior:"smooth"})
}

// MOBILE MENU
let body = document.querySelector('body');
let menuOpenImg = document.querySelector('.menu-open-img');
let menuCloseImg = document.querySelector('.menu-close-img');
let menuMobile = document.querySelector('.navigation.mobile');

const menuOpening = () => {
    menuMobile.style.right = '0';
    body.classList.add('blocked');
}

const menuClosing = () => {
    menuMobile.style.right = '-100%';
    body.classList.remove('blocked');
}

menuOpenImg.onclick = () => {
    menuOpening();
}
menuCloseImg.onclick = () => {
    menuClosing();
}

// ANIMATION ON SCROLL
let animatedItems = document.querySelectorAll('.fade-in');

if (animatedItems.length) {
    function fadeInOnScroll() {
        for (i = 0; i < animatedItems.length; i++) {
            let animatedItem = animatedItems[i];
            let animatedItemHeight = animatedItem.offsetHeight;
            let animatedItemOffset = offset(animatedItem).top;
            let animationStart = 4;
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
}








// document.addEventListener("DOMContentLoaded", () => {
// })


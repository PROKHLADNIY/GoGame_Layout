function updateCopyrightDate () {
    let copyrightDate = document.getElementById('copyright-date');

    let date = new Date();
    let currentYear = date.getFullYear();

    copyrightDate.textContent = 
        `Copyright © ${currentYear} HEALAS.LT. All Rights Reserved.`;
}

updateCopyrightDate();

function setupBurgerMenu () {
    let headerContentBurgerOpen = document.querySelector('.header__content--burger-open');
    let headerContentBurgerClose = document.querySelector('.header__content--burger-close');

    let headerContentBurger = document.querySelector('.header__content--burger');

    headerContentBurger.addEventListener('click', () => {
        headerContentBurgerOpen.classList.toggle('burger-menu-visibility');
        headerContentBurgerClose.classList.toggle('burger-menu-visibility');

        headerContentBurgerOpen.classList.contains('burger-menu-visibility')
        ? document.querySelector('.header__content--nav-and-button').classList.add('header__content--nav-and-button-open')
        : document.querySelector('.header__content--nav-and-button').classList.remove('header__content--nav-and-button-open');
        
        pageScroll();
    });
}

setupBurgerMenu();

function pageScroll () {
    document.querySelector('.header__content--nav-and-button').classList.contains('header__content--nav-and-button-open')
    ? document.body.style.overflow = 'hidden'
    : document.body.style.overflow = 'visible';
}

pageScroll();

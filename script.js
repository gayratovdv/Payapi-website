const navSlide = () => {
    const burger = document.querySelector('.menu__icon');
    const nav = document.querySelector('.lists');
    burger.addEventListener('click', () => {
        nav.classList.toggle('show_click');
    });
}

navSlide();
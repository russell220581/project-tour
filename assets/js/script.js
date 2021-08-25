const searchBtn = document.querySelector("#search-btn");
const themeBtn = document.querySelector("#theme-btn");
const loginBtn = document.querySelector("#login-btn");
const menuBtn = document.querySelector("#menu-btn");
const searchForm = document.querySelector(".search-form");
const menu = document.querySelector(".menu");
const loginForm = document.querySelector(".login-form");

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    menu.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
}

searchBtn.onclick = () => {
    searchForm.classList.toggle('active');
    loginForm.classList.remove('active');
    menu.classList.remove('active');
    menuBtn.classList.remove('fa-times');
}

loginBtn.onclick = () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    menu.classList.remove('active');
    menuBtn.classList.remove('fa-times');

}

themeBtn.onclick = () => {
    themeBtn.classList.toggle('fa-sun');
    searchForm.classList.remove('active');

    if (themeBtn.classList.contains('fa-sun')) {
        document.body.classList.add('active');
    } else {
        document.body.classList.remove('active');
    }
}

window.onscroll = () => {
    menuBtn.classList.remove('fa-times');
    menu.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
}

/* Review Slider */
const reviewSlider = new Swiper('.review-slider', {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});


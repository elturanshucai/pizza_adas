var mySwiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    slidesPerView: 3,
    // loop: true,
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: ".next",
        prevEl: ".prev"
    },
    breakpoints: {
        280: {
            slidesPerView: 1
        },
        680: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 4
        }
    }
});

var teamSwiper = new Swiper(".team-swiper", {
    spaceBetween: 20,
    slidesPerView: 3,
    navigation: {
        nextEl: ".nextTeam",
        prevEl: ".prevTeam"
    },
    breakpoints: {
        220: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        }
    }
});
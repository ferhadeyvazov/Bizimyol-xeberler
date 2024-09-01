// MAİN CAROUSEL
const myCarouselElement = document.querySelector('#carouselExampleSlidesOnly');

const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 2000,
    touch: true,
    wrap: true
});

// SEARCH FORM
const searchEl = document.getElementById('search_icon');
const searchForm = document.querySelector('.searchForm');

searchEl.addEventListener('click', ()=>{
    searchForm.classList.toggle('searchFormActive');
});

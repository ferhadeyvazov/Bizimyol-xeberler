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

// Scroll BUTTONS in DOGMA AZERB....
const scrollFirstContainer = document.querySelector('.first_scroll .ferhad');
const scrollContainer = document.querySelector('.second_scroll .ferhad');
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");
const leftFirstBtn = document.getElementById("leftFirstBtn");
const rightFirstBtn = document.getElementById("rightFirstBtn");

scrollContainer.addEventListener('wheel', (e)=>{
    e.preventDefault();
    console.log(scrollContainer);
    scrollContainer.scrollLeft += e.delay;
    
});

rightBtn.addEventListener('click', ()=>{
    scrollContainer.scrollLeft += 400;
});
leftBtn.addEventListener('click', ()=>{
    scrollContainer.scrollLeft -= 400;
});


scrollFirstContainer.addEventListener('wheel', (e)=>{
    e.preventDefault();
    console.log(scrollFirstContainer);
    scrollFirstContainer.scrollLeft += e.delay;
    
});

rightFirstBtn.addEventListener('click', ()=>{
    scrollFirstContainer.scrollLeft += 400;
});
leftFirstBtn.addEventListener('click', ()=>{
    scrollFirstContainer.scrollLeft -= 400;
});
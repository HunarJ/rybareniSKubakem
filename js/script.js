//gallery event listener
document.addEventListener('click', function(e){
    if(e.target.classList.contains('gallery-image')) {
        const src = e.target.getAttribute("src");
        document.querySelector('.modal-img').src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show();
    }
});

//Navigation scroll down feature

//Carousel
let carousel = new bootstrap.Carousel('#myCarousel')

const myCarouselElement = document.querySelector('#myCarousel')

carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})
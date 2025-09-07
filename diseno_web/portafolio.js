const slides = document.querySelectorAll('.slides img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let index = 0;

function mostrarSlide(i){
    slides.forEach((slide,idx) => {
        slide.classList.toggle('active', idx === i);
    });
}

prevButton.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  mostrarSlide(index);
});

nextButton.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  mostrarSlide(index);
});

mostrarSlide(index)
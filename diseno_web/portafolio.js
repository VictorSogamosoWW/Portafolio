//Imagenes

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

//Formulario
const formulario = document.getElementById('formulario_contacto');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const mensaje = document.getElementById('mensaje');
const btn_submit = document.getElementById('btn_submit');

btn_submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(nombre.value);
    console.log(email.value);
    console.log(mensaje.value);
})

console.log(nombre);
console.log(email);
console.log(mensaje);

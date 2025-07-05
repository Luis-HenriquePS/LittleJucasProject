document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav");
    

    if (toggleButton && nav) {
        toggleButton.addEventListener("click", () => {
            const isVisible = nav.classList.toggle("show");
        });
    }
});


let slideAtual = 0;
const slides = document.querySelectorAll(".slide");
const btnProximo = document.querySelector(".right");
const btnAnterior = document.querySelector(".left");
let intervaloCarrossel;

function mostrarSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slides[index].classList.add("active");
        }
    });
}

function nextSlide() {
    slideAtual = (slideAtual + 1) % slides.length;
    mostrarSlide(slideAtual);
}

function prevSlide() {
    slideAtual = (slideAtual - 1 + slides.length) % slides.length;
    mostrarSlide(slideAtual);
}

function reset() {
    clearInterval(intervaloCarrossel);
    intervaloCarrossel = setInterval(proximoSlide, 5000);
}

btnProximo.addEventListener("click", () => {
    nextSlide();
    reset();
});

btnAnterior.addEventListener("click", () => {
    prevSlide();
    reset();
});

intervaloCarrossel = setInterval(nextSlide, 5000);


function mostrarLista(id) {
    const listas = document.querySelectorAll('.lista');
    listas.forEach(lista => {
        lista.style.display = 'none';
    });

    const selecionada = document.getElementById(id);
    if (selecionada) {
        selecionada.style.display = 'block';
    }

    const intro = document.getElementById('intro');
    if (intro) {
        intro.style.display = 'none';
    }
}

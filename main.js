document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.querySelector('main');
    const header = document.querySelector('header');
    const modal = document.getElementById("myModal");
    const slides = document.getElementsByClassName("mySlides");
    const form = document.querySelector('form');
    const galleryImages = document.querySelectorAll('.gallery img');
    let slideIndex = 1;

    // Ocultar/mostrar encabezado en scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            mainContent.classList.add('visible');
            header.style.top = '-100%';
        } else {
            mainContent.classList.remove('visible');
            header.style.top = '0';
        }
    });

    // Funciones para manejar el modal y las slides
    function openModal() { modal.style.display = "block"; }
    function closeModal() { modal.style.display = "none"; }
    function showSlides(n) {
        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }
        for (let slide of slides) { slide.style.display = "none"; }
        slides[slideIndex-1].style.display = "block";
    }
    function currentSlide(n) { showSlides(slideIndex = n); }

    // Eventos para las imágenes de la galería
    galleryImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            openModal();
            currentSlide(index + 1);
        });
    });

    document.querySelector('.close').addEventListener('click', closeModal);

    // Validación del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        if (name && email && message) {
            alert('Formulario enviado con éxito');
        } else {
            alert('Por favor, complete todos los campos');
        }
    });

    // Inicializar slides
    showSlides(slideIndex);
    console.log('Portafolio listo!');

    // Animación de las barras de habilidades
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        const skillLevel = skill.querySelector('.skill-level');
        const skillPercent = skill.getAttribute('data-skill');
        const skillPercentText = skill.querySelector('.skill-percent');
        skillLevel.style.width = '0%';
        skillPercentText.textContent = '0%';

        setTimeout(() => {
            skillLevel.style.width = skillPercent;
            let width = 0;
            const interval = setInterval(() => {
                if (width >= parseInt(skillPercent)) {
                    clearInterval(interval);
                } else {
                    width++;
                    skillPercentText.textContent = width + '%';
                }
            }, 10);
        }, 500);
    });
});

// Modo oscuro
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Juego de Adivina el Número
document.addEventListener('DOMContentLoaded', () => {
    const guessInput = document.getElementById('guess-input');
    const guessButton = document.getElementById('guess-button');
    const gameStatus = document.getElementById('game-status');
    let randomNumber = Math.floor(Math.random() * 100) + 1;

    guessButton.addEventListener('click', () => {
        const userGuess = parseInt(guessInput.value);
        if (userGuess === randomNumber) {
            gameStatus.textContent = '¡Felicidades! Adivinaste el número.';
            gameStatus.style.color = 'green';
            randomNumber = Math.floor(Math.random() * 100) + 1; // Generar un nuevo número aleatorio
        } else if (userGuess < randomNumber) {
            gameStatus.textContent = 'El número es mayor. Intenta de nuevo.';
            gameStatus.style.color = 'orange';
        } else {
            gameStatus.textContent = 'El número es menor. Intenta de nuevo.';
            gameStatus.style.color = 'orange';
        }
        guessInput.value = ''; // Restablecer el campo de entrada
    });
});
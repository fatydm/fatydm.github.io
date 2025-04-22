const text_animate = document.querySelector('.second-text')

const textLoad = () => {
    setTimeout(() => {
        text_animate.textContent = 'Développeuse Web';
    }, 0);
    setTimeout(() => {
        text_animate.textContent = 'Full-stack';
    }, 4000);
    setTimeout(() => {
        text_animate.textContent = 'En reconversion professionnelle';
    }, 8000);
    setTimeout(() => {
        text_animate.textContent = 'Cool et ouverte d\'esprit';
    }, 12000);
    setTimeout(() => {
        text_animate.textContent = 'Désireuse d\'en apprendre davantage';
    }, 16000);
    setTimeout(() => {
        text_animate.textContent = 'À la recherche d\'une alternance';
    }, 20000);
}
textLoad()
setInterval(textLoad, 12000);


// Menu déroulant
let menuIcon = document.getElementById('menu');
let closeIcon =  document.getElementById('close');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


menuIcon.addEventListener('click', () => {
    navbar.style.display = 'block'
    menuIcon.style.display = 'none'
    closeIcon.style.display = 'block'
})

closeIcon.addEventListener('click', () => {
    navbar.style.display = 'none'
    closeIcon.style.display = 'none'
    menuIcon.style.display = 'block'
})
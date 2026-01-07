// Animation page d'accueil
const text_animate = document.querySelector('.second-text');
const texts = [
    'dev full-stack',
    'junior',
    'en reconversion pro',
    'prête à en apprendre plus',
    'ouverte d\'esprit',
    'cool 😎'
];
let index = 0;

const showNextText = () => {
    text_animate.textContent = texts[index];
    index = (index + 1) % texts.length;
};

// Affiche le premier texte tout de suite
showNextText();
// Change le texte toutes les 7 secondes
setInterval(showNextText, 7000);


// Menu déroulant
let menuIcon = document.getElementById('menu');
let closeIcon = document.getElementById('close');
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

// Formulaire de contact (ne fonctionne pas)
const form = document.getElementById('contact-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => data[key] = value);

    const response = await fetch("https://formspree.io/f/xvgaadee", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        alert("Message envoyé !");
        form.reset();
    } else {
        alert("Erreur lors de l'envoi.");
    }
});


// Switch mode lumières
const light = document.querySelector('.lightBtn')
const dark = document.querySelector('.darkBtn')
const imgColor = document.querySelector('.photo_color')
const imgBlack = document.querySelector('.photo_black')

light.addEventListener('click', () => {
    const body = document.body

    if (body.classList.contains('dark')) {
        body.classList.add('light')
        body.classList.remove('dark')
        light.style.display = 'none'
        dark.style.display = 'flex'
        imgBlack.style.display = 'none'
        imgColor.style.display = 'flex'
    }
})

dark.addEventListener('click', () => {
    console.log('toto');

    const body = document.body

    if (body.classList.contains('light')) {

        body.classList.add('dark')
        body.classList.remove('light')
        dark.style.display = 'none'
        light.style.display = 'flex'
        imgBlack.style.display = 'flex'
        imgColor.style.display = 'none'
    }
})

// document.getElementById("contact-form").addEventListener("submit", async function(e) {
//     e.preventDefault();

//     const data = {
//         fullname: document.getElementById("fullname").value,
//         email: document.getElementById("email").value,
//         phone: document.getElementById("phone").value,
//         company: document.getElementById("company").value,
//         message: document.getElementById("message").value,
//     };
//     console.log("Sending data:", data);

//     try {
//         const response = await fetch("http://localhost:3000/api/contact", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(data),
//         });

//         const result = await response.json();
//         console.log("Server response:", result);

//         if (response.ok) {
//             alert(result.message);
//             document.getElementById("contact-form").reset();
//         } else {
//             alert(result.error || "Erreur lors de l'envoi.");
//         }
//     } catch (error) {
//         console.error(error);
//         alert("Erreur lors de l'envoi du formulaire.");
//     }
// });







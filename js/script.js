const header = document.querySelector('header');
const button = document.querySelector('.nav-button');
button.addEventListener('click', function() {
    header.classList.toggle('nav-open');
});
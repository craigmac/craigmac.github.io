const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link'); // get all of them


navToggle.addEventListener('click', () => {
    // add this class when clicked
    document.body.classList.toggle('nav-open');
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // just in case it was somehow toggle, just remove the class
        document.body.classList.remove('nav-open');
    })
})

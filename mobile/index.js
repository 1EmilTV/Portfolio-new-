const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('shown');
        } else {
            entry.target.classList.remove('shown');
        }
    });
});

const hiddenelements = document.querySelectorAll('.hidden');
hiddenelements.forEach((el) => observer.observe(el))

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const Btn1 = document.getElementById('firstRedirect');

Btn1.addEventListener('click', () => {
    location.href = "https://todolist.great-site.net";
})

const Btn2 = document.getElementById('secondRedirect');

Btn2.addEventListener('click', () => {
    location.href = "https://homeapp.great-site.net";
});

const Btn3 = document.getElementById('thirdRedirect');

Btn3.addEventListener('click', () => {
    location.href = "https://american-album.netlify.app";
});

const Btn4 = document.getElementById('fourthRedirect');

Btn4.addEventListener('click', () => {
    location.href = "https://spiel-website.netlify.app";
});

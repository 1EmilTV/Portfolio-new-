location.href='https://www.emil-dev.me/';

if (window.screen.width < 768) {
    location.href = '/mobile/mobile.html';
}

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


const stickysections = [...document.querySelectorAll('.sticky')];
console.log(stickysections);

window.addEventListener("scroll", (e) => {
    for (let i = 0; i < stickysections.length; i++) {
        transform(stickysections[i]);
    }
})

function transform(section) {
    const offsetTop = section.parentElement.offsetTop;
    const scrollSection = section.querySelector('.scroll_section');
    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100; 
    percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
    scrollSection.style.transform = `translate3d(${-(percentage)}dvw, 0, 0)`;

}

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

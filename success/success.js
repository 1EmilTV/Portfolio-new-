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
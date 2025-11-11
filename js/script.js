//nav bar
const nav = document.querySelector('.floating-nav');
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    if (window.scrollY >= hero.offsetHeight) {
        nav.classList.add('visible');
    } else {
        nav.classList.remove('visible');
    }
});

//get wrapper width
const aboutWrapper = document.querySelector('.about-wrapper');
const projectsWrapper = document.querySelector('.projects-wrapper');

function syncWrapperWidth() {
    const aboutWidth = aboutWrapper.getBoundingClientRect().width;
    projectsWrapper.style.width = `${aboutWidth}px`;
}

syncWrapperWidth();

window.addEventListener('resize', syncWrapperWidth);


//text animation
const faders = document.querySelectorAll('.fade-on-scroll');
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

faders.forEach(fader => {
  observer.observe(fader);
});

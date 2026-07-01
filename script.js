let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
            });

            let activeLink = document.querySelector(`header nav a[href="#${id}"]`);

            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*--scroll reveal--*/
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .certificates-container, .connect-container', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-content', { origin: 'left' });
ScrollReveal().reveal('.home-content p', { origin: 'right' });

const toggleBtn = document.getElementById('theme-toggle');
const icon = document.getElementById('theme-icon');
const root = document.documentElement;

// Load saved preference, or fall back to system preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
  root.setAttribute('data-theme', 'dark');
  icon.textContent = '☀️';
}

toggleBtn.addEventListener('click', () => {
  const isDark = root.getAttribute('data-theme') === 'dark';
  
  if (isDark) {
    root.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
    icon.textContent = '🌙';
  } else {
    root.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    icon.textContent = '☀️';
  }
});

/*--typed js--*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Open Source Contributor', 'ML Enthusiast'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 900,
    loop: true,
});

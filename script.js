// Button alert
function sayHello() {
  alert("Hello, I'm Vivek Singh 🚀✨!\nThanks for visiting my portfolio.");
}

// Fade-in on scroll
const faders = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});

// Run once at load (in case Home is already visible)
window.dispatchEvent(new Event('scroll'));

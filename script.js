// Simple card animation on scroll
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight / 5 * 4;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < triggerBottom){
            card.classList.add('show');
        } else {
            card.classList.remove('show');
        }
    });
});

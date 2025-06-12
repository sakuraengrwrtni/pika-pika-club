// Toggle mobile nav
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Simple testimonial “slider”
let idx = 0;
const quotes = [
  '“Pika Pika made me try new things—even though I’m shy!”<br/><strong>– Aiko</strong>',
  '“Best Saturday night I’ve had in ages. Learned, laughed, connected.”<br/><strong>– Keisuke</strong>',
  '“Loved the matcha cocktails! Can’t wait for next month.”<br/><strong>– Miyu</strong>'
];
const quoteEl = document.querySelector('.testimonial-slider .quote');
document.querySelector('.next').onclick = () => {
  idx = (idx + 1) % quotes.length;
  quoteEl.innerHTML = quotes[idx];
};
document.querySelector('.prev').onclick = () => {
  idx = (idx - 1 + quotes.length) % quotes.length;
  quoteEl.innerHTML = quotes[idx];
};
Add script.js

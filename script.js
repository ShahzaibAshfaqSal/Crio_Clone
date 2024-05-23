const slider = document.querySelector('.slider');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

prev.addEventListener('click', () => {
  slider.scrollBy({
    left: -200,
    behavior: 'smooth'
  });
});

next.addEventListener('click', () => {
  slider.scrollBy({
    left: 200,
    behavior: 'smooth'
  });
});
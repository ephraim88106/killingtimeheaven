document.addEventListener('DOMContentLoaded', () => {
  // Optional: Add subtle parallax effect to the hero title
  document.addEventListener('mousemove', (e) => {
    const title = document.querySelector('.main-title');
    if (title) {
      const x = (window.innerWidth / 2 - e.pageX) / 50;
      const y = (window.innerHeight / 2 - e.pageY) / 50;
      title.style.transform = `translateX(${x}px) translateY(${y}px)`;
    }
  });
});

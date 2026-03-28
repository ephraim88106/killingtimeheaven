document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('button.game-btn');

  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      const gameName = button.querySelector('.btn-text').textContent;
      const platform = button.querySelector('.btn-tag').textContent;
      
      console.log(`Loading ${gameName} for ${platform}...`);
      
      // Simple feedback alert for now
      alert(`${gameName} (${platform}) 버전을 준비 중입니다!`);
    });
  });

  // Optional: Add subtle parallax effect to the hero title
  document.addEventListener('mousemove', (e) => {
    const title = document.querySelector('.main-title');
    const x = (window.innerWidth / 2 - e.pageX) / 50;
    const y = (window.innerHeight / 2 - e.pageY) / 50;
    
    title.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
});

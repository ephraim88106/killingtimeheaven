(function () {
  function init() {
    const desc = document.querySelector('.game-description');
    if (!desc || desc.dataset.gdoReady === '1') return;
    desc.dataset.gdoReady = '1';

    const backdrop = document.createElement('div');
    backdrop.className = 'game-desc-overlay';
    desc.parentNode.insertBefore(backdrop, desc);
    backdrop.appendChild(desc);

    const startBtn = document.createElement('button');
    startBtn.type = 'button';
    startBtn.className = 'game-desc-start';
    startBtn.textContent = '🎮 게임 시작하기';
    desc.appendChild(startBtn);

    const closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'game-desc-close';
    closeBtn.setAttribute('aria-label', '닫기');
    closeBtn.textContent = '×';
    desc.appendChild(closeBtn);

    function dismiss() {
      backdrop.classList.add('fading');
      setTimeout(function () {
        if (backdrop.parentNode) backdrop.parentNode.removeChild(backdrop);
      }, 400);
    }

    startBtn.addEventListener('click', dismiss);
    closeBtn.addEventListener('click', dismiss);
    backdrop.addEventListener('click', function (e) {
      if (e.target === backdrop) dismiss();
    });
    document.addEventListener('keydown', function onEsc(e) {
      if (e.key === 'Escape' && backdrop.parentNode) {
        dismiss();
        document.removeEventListener('keydown', onEsc);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

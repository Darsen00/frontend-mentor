document.addEventListener('DOMContentLoaded', () => {
  const shareBtn = document.getElementById('share-button');
  const tooltipMobile = document.getElementById('mobile-tooltip');
  const footer = document.getElementById('card-footer');

  shareBtn.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      document.body.classList.toggle('share-mode');
    }
  });

  document.addEventListener('click', (e) => {
    const insideTooltip = e.target.closest('#mobile-tooltip');
    const insideButton = e.target.closest('#share-button');

    if (!insideTooltip && !insideButton && window.innerWidth <= 768) {
      document.body.classList.remove('share-mode');
    }
  });
});

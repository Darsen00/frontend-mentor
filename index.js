document.addEventListener('DOMContentLoaded', () => {
  const shareBtn = document.getElementById('share-button');
  const desktopTooltip = document.getElementById('desktop-tooltip');

  shareBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      document.body.classList.toggle('share-mode');
    } else {
      desktopTooltip.style.display =
        desktopTooltip.style.display === 'flex' ? 'none' : 'flex';
    }
  });

  document.addEventListener('click', (e) => {
    const isMobile = window.innerWidth <= 768;
    const insideShare = e.target.closest('#share-button');
    const insideMobileTooltip = e.target.closest('#mobile-tooltip');

    if (isMobile) {
      if (!insideShare && !insideMobileTooltip) {
        document.body.classList.remove('share-mode');
      }
    } else {
      if (!e.target.closest('#desktop-tooltip') && !insideShare) {
        desktopTooltip.style.display = 'none';
      }
    }
  });
});

const init = async () => {
  const { default: Alpine } = await import('alpinejs')

  if (document.querySelector('[x-data*="swiper"]')) {
    const { default: Swiper } = await import('./components/swiper');

    Alpine.plugin(Swiper);
  }

  if (document.querySelector('[x-data*="zoomist"]')) {
    const { default: Zoomist } = await import('./components/zoomist');

    Alpine.plugin(Zoomist);
  }

  window.Alpine = Alpine;
  Alpine.start();
};

init();

import { Autoplay, Navigation, Pagination, Thumbs, EffectCoverflow } from 'swiper/modules';

export default (Alpine) => {
  Alpine.data('swiper', config => ({
    config: config,
    additionalConfig: 'x-config',
    slider: null,
    classes: {
      start: 'slider-start',
      end: 'slider-end'
    },

    async init() {
      const { default: Swiper } = await import('swiper');
      let thumbsInstance;

      this.config.modules = [Pagination, Navigation, Autoplay, Thumbs, EffectCoverflow];

      if (this.config.hasOwnProperty('thumbs')) {
        thumbsInstance = this.initThumbs(this.config.thumbs?.selector);

        if (thumbsInstance) this.config.thumbs.swiper = thumbsInstance;
      }

      this.slider = new Swiper(this.$el, this.config);

      if (this.slider.isBeginning) this.$el.classList.add(this.classes.start);

      this.slider.on('slideChange', () => {
          this.$el.classList[this.slider?.isBeginning ? 'add' : 'remove'](this.classes.start);
          this.$el.classList[this.slider?.isEnd ? 'add' : 'remove'](this.classes.end);
      });
    },

    initThumbs(selector) {
      const thumbs = document.querySelector(selector);

      if (!thumbs) return false;

      const config = JSON.parse(thumbs.getAttribute(this.additionalConfig) || '{}');

      config.modules = [Navigation];

      return new Swiper(thumbs, config);
    }
  }));
};

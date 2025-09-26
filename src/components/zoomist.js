import Zoomist from 'zoomist';

export default (Alpine) => {
  Alpine.data('zoomist', props => ({
    props: props,

    init() {
      const zoomist = new Zoomist(this.$el, this.props);
    }
  }));
};

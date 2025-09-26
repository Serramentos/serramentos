import Zoomist from 'zoomist';

// not used
export default (Alpine) => {
  Alpine.data('zoomist', props => ({
    props: props,

    init() {
      const zoomist = new Zoomist(this.$el, this.props);
    }
  }));
};

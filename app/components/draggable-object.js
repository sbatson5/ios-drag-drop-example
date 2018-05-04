import DraggableObject from 'ember-drag-drop/components/draggable-object';

const noop = function() {
  return;
};

export default DraggableObject.extend({
  init() {
    this._super(...arguments);
    window.addEventListener('touchmove', noop, { passive: false });
  },

  willDestroyElement() {
    this._super(...arguments);
    window.removeEventListener('touchmove', noop);
  }
});

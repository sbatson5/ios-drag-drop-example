/* global MobileDragDrop */

export function initialize(/* application */) {
  let isApple = ['iPhone', 'iPad', 'iPod'].includes(navigator.platform);
  let isSamsung = navigator.userAgent.includes('SamsungBrowser');

  if (typeof MobileDragDrop !== 'undefined' && (isApple || isSamsung)) {
    MobileDragDrop.polyfill({
      holdToDrag: 1
    });
  }
}

export default {
  name: 'mobile-drag-drop',
  initialize
};

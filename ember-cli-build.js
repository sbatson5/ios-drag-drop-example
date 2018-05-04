'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
  });

  addMobileDragDrop(app);
  return app.toTree();
};

function addMobileDragDrop(app) {
  if (EmberApp.env() == 'production') {
    app.import('node_modules/mobile-drag-drop/index.min.js');
  } else {
    app.import('node_modules/mobile-drag-drop/index.js');
  }
  app.import('node_modules/mobile-drag-drop/default.css');
}

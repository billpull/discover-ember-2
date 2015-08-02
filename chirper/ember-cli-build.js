var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });
	
  // The 2 lines that you need to add!
  app.import('bower_components/sweetalert/dist/sweetalert.min.js');
  app.import('bower_components/sweetalert/dist/sweetalert.css');

  return app.toTree();
};
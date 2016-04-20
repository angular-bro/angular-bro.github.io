var AngularApp = require('angular-bro-app'),
    app        = new AngularApp();

// Use `app.importScript` or `app.importStyle` to add additional
// libraries to the generated output files.

app.importStyle('bower_components/angular-material/angular-material.css');
app.importStyle('bower_components/prism/themes/prism-okaidia.css');

app.importScript('bower_components/angular-ui-router/release/angular-ui-router.js');
app.importScript('bower_components/angular-animate/angular-animate.js');
app.importScript('bower_components/angular-aria/angular-aria.js');
app.importScript('bower_components/angular-messages/angular-messages.js');
app.importScript('bower_components/angular-material/angular-material.js');
app.importScript('bower_components/prism/prism.js');

module.exports = app.toTree();

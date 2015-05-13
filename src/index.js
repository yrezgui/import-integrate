var React     = require('react/addons');
Object.assign = require('object-assign');
var Router    = require('react-router');
var qs        = require('qs');
var routes    = require('./routes');
var Handler   = Router.Handler;

if (location) {
  global.params = qs.parse(window.location.search.slice(1));
}

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler />, document.getElementById('main'));
});

window.React = React;
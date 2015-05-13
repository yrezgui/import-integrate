var React         = require('react/addons');
var Router        = require('react-router');
var Route         = Router.Route;
var DefaultRoute  = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var App     = require('./App');
var Home    = require('./Home');
var Widget  = require('./Widget');

var routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={Home} />
    <Route name="widget" handler={Widget} />
  </Route>
);

module.exports = routes;
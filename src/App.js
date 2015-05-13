var React         = require('react/addons');
var RouteHandler  = require('react-router').RouteHandler;

var App = React.createClass({
  render: function () {
    return (
      <section>
        <RouteHandler />
      </section>
    );
  }
});

module.exports = App;
var React = require('react/addons');

var Home = React.createClass({
  render: function () {
    return (
      <h1>Home page - <a href="/widget" className="btn btn-primary">Default</a></h1>
    );
  }
});

module.exports = Home;
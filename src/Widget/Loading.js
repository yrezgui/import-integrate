var React = require('react/addons');

var Loading = React.createClass({
  render: function () {
    return (
      <div className="u-text-center u-padding-Axxl">
        <div className="spinner">
          <i className="spinner__dot spinner__dot--one"></i>
          <i className="spinner__dot spinner__dot--two"></i>
          <i className="spinner__dot spinner__dot--three"></i>
        </div>
      </div>
    );
  }
});

module.exports = Loading;
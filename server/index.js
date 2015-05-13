var express = require('express');
var path    = require('path');
var React   = require('react/addons');
var Router  = require('react-router');
var Handler = Router.Handler;
var renderIndex = require('./renderIndex');
var routes  = require('../lib/routes');

var app     = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(path.join(__dirname, '..', '/public')));

app.use(function (req, res) {
  // pass in `req.url` and the router will immediately match
  Router.run(routes, req.url, function (Handler) {
    var content = React.renderToString(React.createElement(Handler, null));

    res.send(renderIndex(content));
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
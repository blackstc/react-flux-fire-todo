var React = require('react');
var ReactRouter = require('react-router');
var history = require('history/lib/createBrowserHistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

//route components
var Main = require('./components/main');

module.exports = (
  <Router history={history()}>
    <Route path="/" component={Main}>
    </Route>
  </Router>
);

var React = require('react');
var ReactRouter = require('react-router');
var history = require('history/lib/createBrowserHistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

//route components
var Main = require('./components/main');
var ItemDetail = require('./components/item-detail');

module.exports = (
  <Router history={history()}>
    <Route path="/" component={Main}>
      <Route path="/item/:id" component={ItemDetail} />
    </Route>
  </Router>
);

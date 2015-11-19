var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var rootUrl = 'todos-flux.firebaseIO.com/';
var Add = require('./add');

module.exports = React.createClass({
  mixins: [ReactFire],
  getInitialState: function() {
    return {
      items: {}
    }
  },
  componentWillMount: function() {
    this.fb = new Firebase(rootUrl + 'items/');
    this.bindAsObject(this.fb, 'items');
  },
  render: function() {
    return <div className="row panel panel-default">
      <div className="col-md-8 col-md-offset-2">
        <h2 className="text-center">
          TODO LIST
        </h2>
        <Add itemsStore={this.firebaseRefs.items} />
        <hr />
      </div>
    </div>
  }
});

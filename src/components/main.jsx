var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var rootUrl = 'https://todo-flux.firebaseio.com/';
var Add = require('./add');
var List = require('./list');

module.exports = React.createClass({
  mixins: [ReactFire],
  getInitialState: function() {
    return {
      items: {},
      loaded: false
    }
  },
  componentWillMount: function() {
    this.fb = new Firebase(rootUrl + 'items/');
    // access data as this.state.items
    this.bindAsObject(this.fb, 'items');
    this.fb.on('value', this.handleDataLoaded);
  },
  render: function() {
    return <div className="row panel panel-default">
      <div className="col-md-8 col-md-offset-2">
        <h2 className="text-center">
          TODO LIST
        </h2>
        <Add itemsStore={this.firebaseRefs.items} />
        <hr />
        <List items={this.state.items} />
      </div>
    </div>
  },
  handleDataLoaded: function() {
    this.setState({loaded: true});
  }
});

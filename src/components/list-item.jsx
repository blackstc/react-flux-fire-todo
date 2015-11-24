var React = require('react');
var ReactRouter = require('react-router');
var Firebase = require('firebase');
var Link = ReactRouter.Link
var rootUrl = 'https://todo-flux.firebaseio.com/';

module.exports = React.createClass({
  getInitialState: function() {
    return {
      text: this.props.item.text,
      done: this.props.item.done,
      textChanged: false
    }
  },
  componentWillMount: function() {
    this.fb = new Firebase(rootUrl + 'items/' + this.props.item.key)
  },
  render: function() {
    return <div className="input-group list-item">
      <span className="input-group-addon">
        <input
          type="checkbox"
          checked={this.state.done}
          onChange={this.handleDoneChange}
          />
      </span>
      <input type="text"
        className="form-control"
        value={this.state.text}
        onChange={this.handleTextChange}
        disabled={this.state.done}
        />
      <span className="input-group-btn">
        {this.buttonSet()}
      </span>
    </div>
  },
  buttonSet: function() {
    if (this.state.textChanged) {
      return [
        <button
          className="btn btn-success"
          onClick={this.handleSaveClick}
          >
          Save
        </button>,
        <button
          className="btn btn-primary"
          onClick={this.handleUndoClick}
          >
          Undo
        </button>,
        <button
          className="btn btn-danger"
          onClick={this.handleDeleteClick}
          >
          Delete
        </button>
      ]
    } else {
      return [
        <Link
          className="btn btn-primary"
          to={'item/' + this.props.item.key}
          >
          Detail
        </Link>,
        <button
          className="btn btn-danger"
          onClick={this.handleDeleteClick}
          >
          Delete
        </button>
      ]
    }
  },
  handleDeleteClick: function() {
    this.fb.remove();
  },
  handleSaveClick: function(event) {
    this.fb.update({text: this.state.text});
    this.setState({textChanged: false});
  },
  handleUndoClick: function() {
    this.setState({
      text: this.props.item.text,
      textChanged: false
    });
  },
  handleDoneChange: function(event) {
    var update = {done: event.target.checked};
    this.setState(update);
    this.fb.update(update);
  },
  handleTextChange: function(event) {
    this.setState({
      text: event.target.value,
      textChanged: true
    });
  }
});

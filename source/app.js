var React = require('react');
var createReactClass = require('create-react-class');
var ReactDOM = require('react-dom');

var reactClass = createReactClass({

	getInitialState: function () {
		return {
			isHeaderHidden: true,
			title: "stateful react component"
		};
	},

	render: function () {

		var headerElement = React.createElement("h1", { className: "header", key: "header" }, this.state.title);
		var buttonElement = React.createElement("button", { className: "btn btn-default", onClick: this.handleClick, key: "button" }, "toggle header");

		if (this.state.isHeaderHidden) {
			return React.createElement("div", null, [buttonElement]);
		}
		return React.createElement("div", null, [buttonElement, headerElement]);
	},

	handleClick: function () {
		this.setState({ isHeaderHidden: !this.state.isHeaderHidden });
	}
});

var reactElement = React.createElement(reactClass);
ReactDOM.render(reactElement, document.getElementById('react-application'));
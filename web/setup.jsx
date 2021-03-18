const React = require('jsx-dom')

module.exports = {
	React,
	View: props => <body><div class={props.class}>{props.children}</div></body>
}

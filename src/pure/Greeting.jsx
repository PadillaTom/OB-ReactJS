import PropTypes from "prop-types";
import React, { Component } from "react";

export default class Greeting extends Component {
	constructor(props) {
		super(props);
		this.state = {
			age: 29,
		};
	}

	render() {
		return (
			<React.Fragment>
				<div>Hola from Greeting</div>
				<h2>{this.props.name}</h2>
				<h1>{this.state.age}</h1>
				<button onClick={this.birthday}>Cumplir Anos</button>
			</React.Fragment>
		);
	}

	// Methods:
	birthday = () => {
		this.setState((prevState) => ({
			age: prevState.age + 1,
		}));
	};
}

Greeting.propTypes = {
	name: PropTypes.string,
};

import React from "react";
import PropTypes from "prop-types";

const GreetingFunctional = (props) => {
	const [age, setAge] = React.useState(29);
	const birthday = () => {
		setAge(age + 1);
	};
	return (
		<React.Fragment>
			<div>Hola from Greeting</div>
			<h2>{props.name}</h2>
			<h1>{age}</h1>
			<button onClick={birthday}>Cumplir Anos</button>
		</React.Fragment>
	);
};

GreetingFunctional.propTypes = {
	name: PropTypes.string,
};

export default GreetingFunctional;

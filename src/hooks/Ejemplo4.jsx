import React from "react";

const Ejemplo4 = (props) => {
	return (
		<div>
			Pintar los Children
			<h2>Nombre: {props.name}</h2>
			{props.children}
		</div>
	);
};

export default Ejemplo4;

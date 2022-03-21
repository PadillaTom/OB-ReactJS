import React, { useState } from "react";

// Estilos en Constantes:
const loggedStyle = {
	color: "cyan",
};
const unloggedStyle = {
	color: "tomato",
};

const GreetingStyled = (props) => {
	const [isLogged, setIsLogged] = useState(false);

	return (
		<div style={isLogged ? loggedStyle : unloggedStyle}>
			{isLogged ? <p>Bienvenido, {props.name}</p> : <p>Please Login</p>}
			<button
				onClick={() => {
					console.log("Button Clicked");
					setIsLogged(!isLogged);
				}}
			>
				{isLogged ? "Logout" : "Login"}
			</button>
		</div>
	);
};

export default GreetingStyled;

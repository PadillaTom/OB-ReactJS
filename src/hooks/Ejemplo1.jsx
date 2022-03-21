import React, { useState, useEffect } from "react";

const Ejemplo1 = () => {
	// Iniciales:
	const valorInicial = 0;
	const personaInicial = {
		nombre: "Tomas",
		email: "Tompad@email.com",
	};

	// State:
	const [contador, setContador] = useState(valorInicial);
	const [persona, setPersona] = useState(personaInicial);

	// Methods:
	const incrementarContador = () => {
		setContador(contador + 1);
	};
	const actualizarPersona = () => {
		setPersona({
			nombre: "Josecito",
			email: "Jose@email.com",
		});
	};

	// Return:
	return (
		<div>
			<h1>Use State()</h1>
			<h4>Contador: {contador}</h4>
			<h1>Datos de la Persona:</h1>
			<h4>Nombre: {persona.nombre}</h4>
			<h4>Email: {persona.email}</h4>

			<button onClick={incrementarContador}>Contador ++</button>
			<button onClick={actualizarPersona}>Actualizar Persona</button>
		</div>
	);
};

export default Ejemplo1;

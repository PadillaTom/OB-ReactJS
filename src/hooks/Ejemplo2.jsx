import React, { useState, useRef, useEffect } from "react";

const Ejemplo2 = () => {
	// States:
	const [contador1, setContador1] = useState(0);
	const [contador2, setContador2] = useState(0);
	// Ref:
	const miRef = useRef();
	// Effect:
	useEffect(() => {
		// === CASO 1 - SIN [] ===
		// console.log("Cambio en State de componente");
		// console.log("mostranto Referencia al Elemento ene l DOM: ");
		// console.log(miRef);

		// === CASO 2 - CON [contador1] ===
		// console.log("Cambio en State de componente");
		// console.log("mostranto Referencia al Elemento ene l DOM: ");
		// console.log(miRef);

		// === CASO 3 - CON [contador1, contador2] ===
		console.log("Cambio en State de componente");
		console.log("mostranto Referencia al Elemento ene l DOM: ");
		console.log(miRef);
	}, [contador1, contador2]);

	// Methods:
	const incrementar1 = () => {
		setContador1(contador1 + 1);
	};
	const incrementar2 = () => {
		setContador2(contador2 + 1);
	};
	return (
		<div>
			<h1>useState() || useRef() || useEffect()</h1>
			<h4>Contador1: {contador1}</h4>
			<h4>Contador2: {contador2}</h4>
			<h4 ref={miRef}>Ejemplo del elemento referenciado</h4>
			<div>
				<button onClick={incrementar1}> Incrementar 1</button>
				<button onClick={incrementar2}> Incrementar 2</button>
			</div>
		</div>
	);
};

export default Ejemplo2;

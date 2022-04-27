import React, { useState } from "react";

import { getNumbers } from "../../services/observableService";

const ObservableExample = () => {
	const [number, setNumber] = useState(0);

	const getNewNumbers = () => {
		// Suscribimos esta funcion al Observable (modificable)
		console.log("Subscribe a Observable");
		getNumbers.subscribe({
			next(newNumber) {
				console.log("New number: ", newNumber);
				setNumber(newNumber);
			},
			error(error) {
				alert("Error: " + error.message);
			},
			complete() {
				alert("Finished: " + number);
			},
		});
	};

	return (
		<div>
			ObservableExample
			<button onClick={getNewNumbers}>Observe Numbers</button>
		</div>
	);
};

export default ObservableExample;

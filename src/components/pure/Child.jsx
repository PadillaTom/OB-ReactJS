import React, { useRef } from "react";

const Child = ({ newName, updateFunc }) => {
	const nameRef = useRef("");

	const submitName = (e) => {
		e.preventDefault();
		updateFunc(nameRef.current.value);
	};
	return (
		<div>
			<h2>Child Component</h2>
			{/* FATHER: Function y Name variable */}
			{/* HIJO: Ejecuta Function y Recibe el newName de FATHER */}
			<div style={{ marginTop: "1.5rem" }}>
				<form onSubmit={submitName}>
					<input type="text" placeholder="New Name" ref={nameRef} />
					<button type="submit">Submit</button>
				</form>
			</div>
			<h2>{newName}</h2>
		</div>
	);
};

export default Child;

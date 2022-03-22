import React, { useState } from "react";
import Child from "../pure/Child";

const Father = () => {
	const [name, setName] = useState();

	const update = (newName) => {
		setName(newName);
	};
	return (
		<div>
			<Child updateFunc={update} newName={name}></Child>
		</div>
	);
};

export default Father;

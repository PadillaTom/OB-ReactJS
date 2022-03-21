import React from "react";
import Child from "../pure/Child";

const Father = () => {
	const showMessage = (text) => {
		alert("Message received: " + text);
	};
	return (
		<div>
			<Child fatherFunc={showMessage}></Child>
		</div>
	);
};

export default Father;

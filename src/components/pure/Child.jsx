import React, { useRef } from "react";

const Child = ({ fatherFunc }) => {
	const messageRef = useRef("");

	return (
		<div>
			<h2>Child Component</h2>
			<button
				onClick={() => {
					fatherFunc("Hello from CHILD");
				}}
			>
				Button 1
			</button>
		</div>
	);
};

export default Child;

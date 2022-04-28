import React from "react";
import { login } from "../../services/axiosCRUDService";

const AxiosCRUDExample = () => {
	const authUser = () => {
		login("admin1@test.com", "12345678")
			.then((response) => {
				console.log(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div>
			<h2>AxiosCRUDExample</h2>
			<button onClick={authUser}>Login</button>
		</div>
	);
};

export default AxiosCRUDExample;

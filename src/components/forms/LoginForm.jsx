import React, { useState } from "react";

const LoginForm = () => {
	const initialCreds = [
		{
			user: "",
			password: "",
		},
	];
	// State:
	const [credentials, setCredentials] = useState(initialCreds);

	// RETURN:
	return <div>LoginForm</div>;
};

export default LoginForm;

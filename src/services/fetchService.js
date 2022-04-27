export const getAllUsers = async () => {
	let response = await fetch("https:reqres.in/api/users");
	return response;
	// console.log("GET ALL: ", response);
};

export const login = async (email, password) => {
	let body = {
		email,
		password,
	};
	let response = await fetch("https://reqres.in/api/login", {
		method: "POST",
		cache: "no-cache",
		headers: {
			"Content-type": "application/json",
		},
		body,
	});
};

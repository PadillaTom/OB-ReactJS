export const getAllUsers = async () => {
	let response = await fetch("https://reqres.in/api/users");
	return response;
	// console.log("GET ALL: ", response);
};

import axios from "axios";

/**
 * Login Method
 *@param {string} email
 *@param {string} password
 */

export const login = (email, password) => {
	let body = { email, password };

	// Returns a Promise:
	return axios.post("https://s1-02-t-backend.herokuapp.com/auth/login", body);
};

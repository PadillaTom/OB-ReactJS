import axios from "axios";

export default axios.create({
	baseURL: "https://s1-02-t-backend.herokuapp.com",
	responseType: "json",
	timeout: 6000,
});

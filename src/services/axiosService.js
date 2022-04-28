import APIRequest from "../utils/config/axios.config";

export function getAllProfessions() {
	return APIRequest.get("/profession");
}

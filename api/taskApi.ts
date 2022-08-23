import axios from "axios";

const taskApi = axios.create({
	baseURL: "/api",
});

export default taskApi;

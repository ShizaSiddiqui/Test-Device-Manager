import axios from "axios";

const api = axios.create({
	baseURL: "https://zenquotes.io/api/today",
});

export default api;

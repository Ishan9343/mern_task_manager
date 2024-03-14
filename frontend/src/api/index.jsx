import axios from "axios";

const api = axios.create({
  baseURL: "https://mern-task-manager-51l6.onrender.com/api",
});
export default api;

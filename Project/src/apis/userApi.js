import axios from "axios";

const BACKEND_SERVICE_URL = process.env.SHRI_GANESH_TRADERS_BACKEND_URL;
const backendAPI = axios.create({
  baseURL: "http://localhost:5000/api",
});

export default backendAPI;

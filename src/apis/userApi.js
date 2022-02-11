import axios from "axios";

const BACKEND_SERVICE_URL = process.env.SHRI_GANESH_TRADERS_BACKEND;

const backendAPI = axios.create({
  baseURL: `$(BACKEND_SERVICE_URL)/api/`,
});

export default backendAPI;

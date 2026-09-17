import axios from "axios";
import type { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 5000,
});

export default api;
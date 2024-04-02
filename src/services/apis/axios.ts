import { Token } from "@/enums";
import { getCookie } from "@/utils/cookie";
import axios from "axios";

export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

export const axiosAuth = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

axiosAuth.interceptors.request.use(function (config) {
  const accessToken = getCookie(Token.ACCESS_TOKEN);
  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

import axios from "axios";

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
});

httpClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.set("Authorization", `Bearer ${token}`);
  }
  return config;
});
const _send = async (method, path, data, config) => {
  const response = await httpClient.request({
    ...config,
    method,
    url: path,
    data,
  });
  return response.data;
};
const get = async (path, config) => {
  return await _send("get", path, null, config);
};
const post = async (path, data, config) => {
  return await _send("post", path, data, config);
};
const put = async (path, data, config) => {
  return await _send("put", path, data, config);
};
const patch = async (path, data, config) => {
  return await _send("patch", path, data, config);
};
const del = async (path, config) => {
  return await _send("del", path, null, config);
};

const http = { get, post, put, patch, del };

export default http;

import axios, { AxiosInstance } from "axios";

const service: AxiosInstance = axios.create({
  baseURL: "http://localhost:8080/api",
});

// 添加请求拦截器
service.interceptors.request.use(
  (config) => {
    console.log("发送请求:", config);
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  (response) => {
    console.log("接收到的相应:", response.data);
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;

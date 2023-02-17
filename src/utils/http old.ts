import axios from 'axios';

const defaultConfig = {
  baseUrl: '',
  timeout: 5000
};

const axiosInstance = axios.create(defaultConfig);

// 请求拦截
axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// 响应拦截
axiosInstance.interceptors.response.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// 封装请求
const get = (url, params) => {
  return axiosInstance
    .get(url, params)
    .then((res) => res?.data)
    .catch();
};

const post = (url, params) => {
  return axiosInstance
    .post(url, params)
    .then((res) => res?.data)
    .catch();
};

export { get, post };

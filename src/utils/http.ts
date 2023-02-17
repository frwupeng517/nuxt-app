import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios';

const defaultConfig = {
  baseUrl: '',
  timeout: 5000
};

class Http {
  constructor() {
    this.httpInterceptorsRequest();
    this.httpInterceptorsResponse();
  }

  private static axiosInstance = axios.create(defaultConfig);

  // 请求拦截
  private httpInterceptorsRequest() {
    Http.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        return config;
      },
      (err) => {
        return Promise.reject(err);
      }
    );
  }

  // 响应拦截
  private httpInterceptorsResponse() {
    Http.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (err) => {
        return Promise.reject(err);
      }
    );
  }

  // 封装请求
  public get<T>(url: string, params: AxiosRequestConfig): Promise<T> {
    return Http.axiosInstance
      .get(url, params)
      .then((res) => res?.data)
      .catch();
  }

  public post<T>(url: string, params: AxiosRequestConfig): Promise<T> {
    return Http.axiosInstance
      .post(url, params)
      .then((res) => res?.data)
      .catch();
  }
}

export const http = new Http();

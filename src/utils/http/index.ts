import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'

interface HttpConfig<D = any> extends AxiosRequestConfig {
  data?: D
}

class HttpClient {
  private readonly http: AxiosInstance

  constructor() {
    this.http = axios.create({
      baseURL: import.meta.env.VITE_APP_BASE_API,
      timeout: 60000
    })

    this.http.interceptors.request.use(
      (config) => {
        const whiteList = ['/refreshToken', '/login']

        return whiteList.some((v) => config!.url!.indexOf(v) > -1)
          ? config
          : new Promise((resolve) => {
              // 处理 token
              // config.headers.Authorization = 'token'
              resolve(config)
            })
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    this.http.interceptors.response.use(
      (response) => {
        return response.data
      },
      (error) => {
        ElMessage.error(error)
        return Promise.reject(error)
      }
    )
  }

  // 还可以添加其他 axios 实例的方法，这里只添加 request 够用了
  public async request<R = AxiosResponse<any>, D = any>(config: HttpConfig<D>): Promise<R> {
    const response = await this.http.request<D, R>({
      ...config,
      headers: {
        ...config.headers,
        'Content-Type': 'application/json'
      }
    })

    return response
  }
}

export default new HttpClient()

import axios, { AxiosRequestConfig } from 'axios'

import { withInterceptors } from './interceptor'

const instance = withInterceptors(
  axios.create({
    baseURL: 'http://0.0.0.0:3003',
    timeout: 5000,
    transformRequest: [
      function (data, headers) {
        // 对发送的 data 进行任意转换处理
        console.log(headers)
        return data
      },
    ],
    transformResponse: [
      function (data) {
        // 对接收的 data 进行任意转换处理

        return data
      },
    ],
  }),
)

export const get = <T, D>(
  url: string,
  params?: any,
  config?: AxiosRequestConfig<D>,
) =>
  instance.get<T>(url, {
    ...config,
    params,
  })

export default instance

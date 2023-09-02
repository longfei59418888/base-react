import {
  AxiosInstance,
  AxiosRequestHeaders,
  InternalAxiosRequestConfig,
} from 'axios'

import { MEMBER_INFO, MEMBER_INFO_TOKEN } from '@/constants/storages'
import useMemberInfoStore from '@/hooks/store/useMemberInfoStore'
import { Storages } from '@/utils/localstorage'

function withLoginInterceptor(axios: AxiosInstance) {
  axios.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
    const storage = Storages.getStorage(MEMBER_INFO)
    let { token } = useMemberInfoStore.getState()
    const { setToken } = useMemberInfoStore.getState()
    if (!token) {
      token = storage.get<string>(MEMBER_INFO_TOKEN) as string
      if (token) await setToken(token)
    }
    if (token) {
      return {
        ...config,
        headers: {
          ...config.headers,
          Authorization: token,
        } as AxiosRequestHeaders,
      }
    }
    return Promise.reject({ esd: 1 })
  })
}

export function withErrorInterceptor(axios: AxiosInstance) {
  axios.interceptors.response.use(
    (response) => response.data,
    (e) => {
      if (e?.response?.data) return e.response
      return {
        status: 501,
        data: {
          code: 'Timeout',
          message: '服务器繁忙,稍后重试！',
        },
      }
    },
  )
  return axios
}

export function withInterceptors(axios: AxiosInstance) {
  withLoginInterceptor(axios)
  withErrorInterceptor(axios)

  return axios
}

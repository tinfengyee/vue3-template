import http from '@/utils/http'

enum Api {
  Demo = '/demo'
}

/**
 * expamle:
 * getList(1).then((res) => {
 *   res.data.name
 * })
 */
export const getList = (id: number) => {
  return http.request<IResponse<{ name: string }>>({
    method: 'get',
    url: Api.Demo,
    params: {
      id
    }
  })
}

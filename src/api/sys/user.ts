import http from '@/utils/http'
import type { UserModel } from './model/userModel'

enum Api {
  List = '/user/list'
}

/**
 * expamle:
 * getList(1).then((res) => {
 *   console.log(res.data) // list
 * })
 */
export const getList = (id: number) => {
  return http.request<IResponse<UserModel[]>>({
    method: 'get',
    url: Api.List,
    params: {
      id
    }
  })
}

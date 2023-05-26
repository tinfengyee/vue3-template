import { type MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/user/list',
    method: 'get',
    response: ({ query, body }) => {
      console.log(query, body)
      return {
        code: 3001,
        msg: 'no msg',
        data: [
          {
            id_token: 'string',
            name: 'string',
            age: 2
          }
        ]
      }
    }
  }
] as MockMethod[]

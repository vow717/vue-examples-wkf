import type { ResultVO, User, Course } from '@/datasource/Types'
import { listCourses } from '@/datasource/Types'
import { createServer, Response } from 'miragejs'
import * as consty from '@/datasource/Const'
/*
createServer({})：创建一个 MirageJS 服务器实例，{} 是 MirageJS 的配置对象，这里未做特殊配置。
server.namespace = 'api'：设置服务器的命名空间为 'api'，即所有的路由都会以 /api 开头。
*/
const server = createServer({})
server.namespace = 'api'

//实验04的----------------------------------------------------------------------------------------
server.post('experiment04/login', (_schema, request) => {
  const { number, password } = JSON.parse(request.requestBody)
  const resultVO: ResultVO<{}> = {
    code: 200,
    data: {}
  }
  if (number === '2022212927' && password == '2022212927') {
    resultVO.data = { role: '0', user: { name: 'wkf', title: 'student', age: '20' } }
    return new Response(
      200,
      {
        token: '1a2s3d4f5g'
      },
      resultVO
    )
  }
  if (number === 'admin' && password == 'admin') {
    resultVO.data = { role: '1', user: { name: 'BO', title: 'teacher', age: '30' } }
    return new Response(
      200,
      {
        token: '1q2w3e4r5t'
      },
      resultVO
    )
  }
  resultVO.code = 401
  resultVO.message = '用户名密码错误'
  return resultVO
})

server.get('experiment04/user/courses', (_schema, request) => {
  const resultVO: ResultVO<{}> = {
    code: 200,
    data: {}
  }
  const token = request.requestHeaders.token
  if (!token) {
    resultVO.code = 401
    console.log('未登录不可以查看课程')
    resultVO.message = '请先登入'
    return resultVO
  }
  if (token == '1a2s3d4f5g') {
    resultVO.code = 403
    console.log('无权限查看课程')
    resultVO.message = '暂无权限查看'
    return resultVO
  }
  console.log('有权限查看课程')
  resultVO.data = { code: 200, courses: listCourses() }
  return resultVO
})

//例子08的-----------------------------------------------------------------------------------------------
//当访问 /api/users/:uid（例如 /api/users/123）时，返回一个包含用户信息的 ResultVO 对象。
server.get('users/:uid', () => {
  const resultVO: ResultVO<{ user: User }> = {
    code: 200,
    data: { user: { id: 2, name: 'wkf' } }
  }
  return resultVO
})

server.get(
  'users/:uid/courses',
  () => {
    const resultVO: ResultVO<{ courses: Course[] }> = {
      code: 200,
      data: { courses: listCourses() }
    }

    return resultVO
  },
  { timing: 2000 }
)

server.get('users/:uid', (_schema, request) => {
  console.log(request.params.uid)
  const resultVO: ResultVO<{ user: User }> = {
    code: 200,
    data: { user: { id: 2, name: 'wkf' } }
  }

  return resultVO
})

//接收 POST 请求 /api/login，根据提交的用户名和密码返回不同的登录结果，包括不同角色的 token 和用户信息。
server.post('login', (_schema, request) => {
  const { number, password } = JSON.parse(request.requestBody)
  const resultVO: ResultVO<{}> = {
    code: 200,
    data: {}
  }
  if (number == '1001' && password == '123456') {
    resultVO.data = { role: '243f45a3ce', user: { title: '讲师' } }
    return new Response(
      200,
      {
        token:
          '744193c872b677aab12a0ced447882f4cf9fca92a09d428a26ed145ed2ed2eec665c8824ebc353042ba2be136efcb5c6'
      },
      resultVO
    )
  }
  resultVO.code = 401
  resultVO.message = '用户名密码错误'
  return resultVO
})

//根据请求头中的 token 判断用户是否登录，如果登录且有权限，则返回用户的课程信息，否则返回未登录或无权限的错误信息。
server.get('home', (_schema, request) => {
  const resultVO: ResultVO<{}> = { code: 200, data: {} }
  const token = request.requestHeaders.token
  if (!token) {
    resultVO.code = 401
    resultVO.message = '未登录'
    return resultVO
  }
  if (
    token ==
    '744193c872b677aab12a0ced447882f4cf9fca92a09d428a26ed145ed2ed2eec665c8824ebc353042ba2be136efcb5c6'
  ) {
    resultVO.code = 200
    resultVO.data = { courses: listCourses() }
    return resultVO
  }

  resultVO.code = 403
  resultVO.message = '无权限'
  return resultVO
})

//接收 GET 请求 /api/search，根据查询参数 address 查询相关的 ID，并返回结果。
server.get('search', (_schema, request) => {
  const resultVO: ResultVO<{}> = { code: 200, data: {} }
  const address = request.queryParams.address
  console.log(address)
  const ids = [{ id: '584' }, { id: '8875' }]
  resultVO.data = ids
  return resultVO
})

//接收 POST 请求 /api/login-guard，根据提交的用户名和密码返回不同的登录结果，包括不同角色的 token 和用户信息。
server.post('login-guard', (_schema, request) => {
  const { number, password } = JSON.parse(request.requestBody)

  const resultVO: ResultVO<{}> = { code: 200, data: {} }
  if (number == 'user' && password == 'user') {
    return new Response(
      200,
      {
        role: consty.USER,
        token:
          '744193c872b677aab12a0ced447882f4cf9fca92a09d428a26ed145ed2ed2eec665c8824ebc353042ba2be136efcb5c6'
      },
      resultVO
    )
  }
  if (number == 'admin' && password == 'admin') {
    return new Response(
      200,
      {
        role: consty.ADMIN,
        token:
          '744193c872b677aab12a0ced447882f4cf9fca92a09d428a26ed145ed2ed2eec665c8824ebc353042ba2be136efcb5c6'
      },
      resultVO
    )
  }
  resultVO.code = 401
  resultVO.message = '用户名密码错误'
  return resultVO
})

//接收 GET 请求 /api/courses，延迟 2000 毫秒（2 秒）后返回课程信息。
server.get(
  'courses',
  () => {
    const resultVO: ResultVO<{}> = { code: 200, data: {} }
    resultVO.data = {
      courses: listCourses()
    }
    return resultVO
  },
  { timing: 2000 }
)

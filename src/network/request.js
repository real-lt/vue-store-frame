import axios from 'axios'

export function request(config) {
  // 1. 创建 axios 实例
  // const instance = axios.create({
  //   baseURL: "http://域名:端口",
  //   timeout: 5000
  // })
  const instance = axios.create({
    timeout: 5000
  })

  // 2. 拦截器
  // 2.1 请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, error => {
    console.error(error)
  })

  // 2.2 响应拦截
  instance.interceptors.response.use(result => {
    return result.data
  }, error => {
    console.error(error)
  })

  // 3. 发送真实网络请求
  return instance(config)
}
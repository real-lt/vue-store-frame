import { request } from "./request";

export function getHomeMultidata() {
  return request({
    url: "/home/multidata",
    method: "post"
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: "/home/goods",
    // 应该是get请求，后边拼接type和页码
    // params: {
    //   type,
    //   page
    // },
    // method: "get"
    method: "post"
  })
}
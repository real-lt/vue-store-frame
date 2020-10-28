import {request} from "./request"
export function getDetailById(option) {
  return request({
    url: "/detail/info",
    method: "get",
    params: {
      id: option.id
    }
  })
}
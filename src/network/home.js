import {request} from "./request";

export function getHomeMultidata() {
  return request({
    url: "/news/index",
    method: "post"
  })
}
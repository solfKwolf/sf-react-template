import request from "@/utils/request"

export function userCoinList() {
  return request({
    url: "/userCoin/list",
    method: "POST",
  })
} 


export function test() {
  return request({
    url: "/test",
    method: "GET",             
  })
}
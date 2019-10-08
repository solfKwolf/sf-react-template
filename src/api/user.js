import request from "@/utils/request"

export function userCoinList() {
  return request({
    url: "/userCoin/list",
    method: "POST",
  })
} 
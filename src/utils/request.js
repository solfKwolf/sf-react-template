/*
 * @Date: 2019-09-09 17:59:23
 * @LastEditors: solfKwolf
 * @LastEditTime: 2019-09-24 11:10:00
 * @desc: 请求对象封装
 */

import axios from 'axios'
import { message } from 'antd';
import Lockr from "lockr";
// import { store } from "@/store"


// 创建axios实例
const service = axios.create({
  // baseURL: process.env.NODE_ENV === 'production' ? process.env.BASE_API : '/api/', // api的base_url
  baseURL: process.env.REACT_APP_BASE_URL, // 改成.env配置文件
  timeout: 15000 // 请求超时时间
})


// request拦截器
service.interceptors.request.use(
  config => {
    // if (store.getters.enable) {
    // if (sessionStorage.oaxLoginUserId) {
    // config.baseURL === process.env.BASE_API
    // }
    if (config.method === 'post') {
      // config.data = qs.stringify(config.data)
      // config.content-type = 'application/x-www-form-urlencoded'
    }

    if (Lockr.get("accessToken")) {
      config.headers.accessToken = Lockr.get("accessToken")
    }

    if (Lockr.get("userId")) {
      config.headers.userId = Lockr.get("userId")
    }
    // config.headers.lang = store.getters.language
    config.headers.lang = "cn"
    // config.headers.userId = store.getters.userId
    // config.headers.acce  ssToken = store.getters.accessToken
    // sessionStorage.time = 70
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (!res.success) {
      if (res.code === '-1' && res.msg === "登录失效") {
        message.error(res.msg)
      }
      return res
    } else {
      return res
    }
  },
  error => {
    console.log('error在这' + error) // for debug
    return Promise.reject(error)
  }
)





export default service
import React, { Component } from 'react'
import * as userAjax from "@/api/user"
import { t, tt } from "@/utils/i18n"

export default class index extends Component {
  componentDidMount() {
    console.log(process.env)
    // 币种列表
    userAjax.userCoinList().then(res => {
      console.log(res)
    })
    //  测试mock
    userAjax.test().then(res => {
      console.log(res)
    })
  }
  render() {
    return (
      <div>
        <h2>{t('test')}</h2>
        <p>{tt('hello', {test: "lzj"})}</p>
      </div>
    )
  }
}

import React, { Component } from 'react'
import * as userAjax from "@/api/user"
import { t } from "@/utils/i18n"

export default class index extends Component {
  componentDidMount() {
    // 币种列表
    userAjax.userCoinList().then(res => {
      console.log(res)
    })
  }
  render() {
    return (
      <div>
        <h2>{t('test')}</h2>
      </div>
    )
  }
}

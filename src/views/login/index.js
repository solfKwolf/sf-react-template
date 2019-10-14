import React, { Component } from 'react'
import { connect } from 'react-redux'
import "./index.module.scss"

// 自定义component
import EmailLogin from "./component/EmailLogin"



export class index extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div styleName="login-wrap">
        <div styleName="login-box">
          {/* 图片展示 */}
          <div styleName="show-pic"></div>
          <div styleName="form-area">
            {/* 邮箱登录 */}
            <EmailLogin />
            {/* 手机登录 */}
            
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(index)

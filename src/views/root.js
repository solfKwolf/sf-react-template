/** 
 * @desc 路由根路径, 建議路由控制都在這裡
 */
import React, { Suspense, Component } from "react";
import { renderRoutes } from 'react-router-config'
import { connect } from 'react-redux'
import { Spin } from 'antd';

import { IntlProvider } from 'react-intl';
import languages from "@/locale"

import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const mapStateToProps = (state) => ({
  curLang: state.app.language
})

const mapDispatchToProps = {

}

@connect(mapStateToProps, mapDispatchToProps)
class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: false // 这个其实应该是属于全局，但是只是测试用的
    }
  }

  componentWillMount() {
    nprogress.start()
  }

  componentDidMount() {
    // 这里就可以实现路由拦截...
    const path = this.props.location.pathname //获取路由路径
    console.log("current router:", path)
    // if(path === '/about') {
    //   this.props.history.push({ pathname : '/test'})
    // }
    nprogress.done()
  }
  render() {
    const { route, curLang } = this.props
    return (
      <IntlProvider locale={curLang} messages={languages[curLang]}>
        <Suspense fallback={<Spin size="large" />}>

          {/* child routes won't render without this */}
          {renderRoutes(route.routes)}
        </Suspense>
      </IntlProvider>
    )
  }
}



export default Root
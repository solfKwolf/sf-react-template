/** 
 * @desc 路由根路径
 */
import React, { Suspense, Component } from "react";
import { renderRoutes } from 'react-router-config'
import { Spin } from 'antd';

// const Root = ({ route }) => (
//   <Suspense fallback={<Spin />}>
//     {/* child routes won't render without this */}
//     {renderRoutes(route.routes)}
//   </Suspense>
// );

class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: false // 这个其实应该是属于全局，但是只是测试用的
    }
  }
  componentDidMount() {
    // 这里就可以实现路由拦截...
    const path = this.props.location.pathname //获取路由路径
    console.log("current router:", path)
    // if(path === '/about') {
    //   this.props.history.push({ pathname : '/test'})
    // }
  }
  render() {
    const {route} = this.props
    return (
      <Suspense fallback={<Spin size="large" />}>
        {/* child routes won't render without this */}
        {renderRoutes(route.routes)}
      </Suspense>
    )
  }
}

export default Root;
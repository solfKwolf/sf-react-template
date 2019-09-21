import React, { Component } from 'react'
import "./index.module.scss"

export class index extends Component {
  
  render() {
    return (
      <div className="container">
        <div styleName="main-header-box">
          <div styleName="view-navagation">
            <div className="container">
              <div styleName="navigation-main">
                <img styleName="logo" src={require('../../logo.svg')} alt="logo"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default index
import React from 'react';

import { Provider } from 'react-redux';
import { store } from './store'

import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from "react-router-config";
import { routes } from "./routes/index"

import { IntlProvider } from 'react-intl';
// import en from 'react-intl/locale-data/en';
// import zh from 'react-intl/locale-data/zh';

// addLocaleData([...en, ...zh]);  // 引入多语言环境的数据

import './styles/index.scss'

import Navbar from "@/components/Navbar"


function App() {
  return (
    <IntlProvider locale='en'>
      <Provider store={store}>
        <BrowserRouter>
          <div className="app">
            <Navbar />
            {/* 路由控制 */}
            {renderRoutes(routes)}
          </div>
        </BrowserRouter>
      </Provider>
    </IntlProvider>

  );
}

export default App;

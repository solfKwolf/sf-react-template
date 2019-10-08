import React from 'react';

import { Provider } from 'react-redux';
import { store } from './store'

import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from "react-router-config";
import { routes } from "./routes/index"

import { IntlProvider } from 'react-intl';
import languages from "@/locale"

import './styles/index.scss'

import Navbar from "@/components/Navbar"


function App() {
  let curLang;
  // 手动监听，有点蠢，能用就行
  store.subscribe(() => {
    curLang =  store.getState().app.language
  })
  return (
    <Provider store={store}>
      <IntlProvider locale={curLang} messages={languages[curLang]}>
        <BrowserRouter>
          <div className="app">
            <Navbar />
            {/* 路由控制 */}
            {renderRoutes(routes)}
          </div>
        </BrowserRouter>
      </IntlProvider>
    </Provider>

  );
}

export default App;

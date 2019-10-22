import React from 'react';

import { Provider } from 'react-redux';
import { store } from './store'

import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from "react-router-config";
import { routes } from "./routes/index"

// 挂载 mock api, 如不需要，则请注释
import "@/mock/index"

import './styles/index.scss'

import Navbar from "@/components/Navbar"


function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
          <div className="app">
            <Navbar />
            {/* 路由控制 */}
            {renderRoutes(routes)}
          </div>
        </BrowserRouter>
    </Provider>
  );
}

export default App;

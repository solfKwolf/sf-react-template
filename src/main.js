import React from 'react';

import { Provider } from 'react-redux';
import { store } from './store'

import {BrowserRouter} from 'react-router-dom'

import {  IntlProvider } from 'react-intl';
// import en from 'react-intl/locale-data/en';
// import zh from 'react-intl/locale-data/zh';


// addLocaleData([...en, ...zh]);  // 引入多语言环境的数据

function App() {
  return (
    <IntlProvider locale='en'>
      <Provider store={store}>
        <BrowserRouter>
          <div className="app"></div>
        </BrowserRouter>
      </Provider>
    </IntlProvider>

  );
}

export default App;

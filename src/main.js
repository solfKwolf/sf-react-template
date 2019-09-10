import React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';


addLocaleData([...en, ...zh]);  // 引入多语言环境的数据

function App() {
  return (
    <IntlProvider>
      <div className="app">
      </div>
    </IntlProvider>

  );
}

export default App;

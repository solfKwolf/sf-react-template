This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# 简介

基于create-react-app定制的模板

# 参考资料

## redux

- <https://github.com/ellbee/redux-boilerplate>

# webpack优化

## externals

```html
// public/index.html
<!-- cdn -->
<script src="https://cdn.bootcss.com/react/16.9.0/umd/react.production.min.js"></script>
<script src="https://cdn.bootcss.com/react-dom/16.9.0/umd/react-dom.production.min.js"></script>
```

```javascript
// webpack.config.js
externals: {
  'react': 'React',
  'react-dom': 'ReactDOM'
},
```

### 遇到的小坑

> React is not defined

选择UMD版本

'@': paths.appSrc, 'api': paths.appApi, 'actions': paths.appActions,

# antd

实现antd的按需加载

```javascript
// 方法一 配置webpack.config.js
{
  test: /\.(js|mjs|jsx|ts|tsx)$/,
  include: paths.appSrc,
  loader: require.resolve('babel-loader'),
  options: {
    customize: require.resolve(
      'babel-preset-react-app/webpack-overrides'
    ),
    
    plugins: [
      [
        "import", {
            "libraryName": "antd",
            "style": "css",
            libraryDirectory: 'es',
        }
      ],
      ...
    ],
  },
},

// 方法二 配置babelrc文件
{
  "presets": ["env", "react"],
  "plugins": [
    "transform-runtime",
    "transform-object-rest-spread",
    [
      "import", {
        "libraryName": "antd",
        "style": true
      }
    ]
  ]
}
```

## redux 配置

搭配redux-tool，修复bug，引入main文件

## 动态路由的配置

## CSS Module

使用`react-css-modules`，来加强create-react-app的CSS Module功能。

以上的废弃了，采用`babel-plugin-named-asset-import`,更加便捷

```javascript
// 在webpack.config.js中配置
// 1、在babel-loader中的plugin数组中,加入
[
  require.resolve("babel-plugin-react-css-modules"),
  {
    "exclude": "node_modules",
    "generateScopedName": "[name]_[local]__[hash:base64:5]",
    "webpackHotModuleReloading": true,
    "filetypes": {
      ".scss": {
        "syntax": "postcss-scss"
      }
    }
  }
]

// 在sassModule模块中加入
{
  test: sassModuleRegex,
  use: getStyleLoaders(
    {
      importLoaders: 2,
      sourceMap: isEnvProduction && shouldUseSourceMap,
      modules: true,
      localIdentName: "[name]_[local]__[hash:base64:5]",
    },
    'sass-loader'
  ),
},

// 注意: localIdentName 和 generateScopedName必须是一致的，不然无法生效。
```

### localIdentName || generateScopedName 


### Styles and Assets


## react-router-config 与 lazy loading

所有的路由数组都在`routes/index.js`下控制。`_import`函数会自动导入`views`目录下的jsx,js文件。


### hook
这个还需要慢慢看文档

## 数据驱动分析

growingIO数据分析平台


## 资源

所有资源都是以页面为区分，再细分

# Available Scripts

In the project directory, you can run:

## `npm start`

Runs the app in the development mode.<br>
Open <http://localhost:3000> to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Code Splitting

This section has moved here: <https://facebook.github.io/create-react-app/docs/code-splitting>

## Analyzing the Bundle Size

This section has moved here: <https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size>

## Making a Progressive Web App

This section has moved here: <https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app>

## Advanced Configuration

This section has moved here: <https://facebook.github.io/create-react-app/docs/advanced-configuration>

## Deployment

This section has moved here: <https://facebook.github.io/create-react-app/docs/deployment>

## `npm run build` fails to minify

This section has moved here: <https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify>

import  {lazy} from "react"
/**
 * @description 工具函数: 异步加载页面组件
 * @param {string} path - views目录下的文件夹名
 */
export default function _import(path) {
  return lazy(() => import(`@/views/${path}`))
}
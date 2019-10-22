// 使用Mock
import Mock from 'mockjs'

export default Mock.mock('/api/test', 'get', {
  success: true,
  message: '@cparagraph',
  'list|1-3': [{
    'sid|+1': 1,
  }]
})



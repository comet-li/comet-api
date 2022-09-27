// 1. 导入 express
const express = require('express')

// 2. 创建 express 的服务器实例
const app = express()

// 4. 导入并配置 cors 中间件 -- 解决跨域问题
const cors = require('cors')
app.use(cors())

// 5. 配置解析表单数据的中间件 注意：这个中间件，只能解析 `application/x-www-form-urlencoded` 格式的表单数据
app.use(express.urlencoded({ extended: false }))

// 导入并注册首页路由模块
const homeRouter = require('./router/home')
app.use('/api', homeRouter)

// 3. 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(3000, function () {
  console.log('api server running at http://127.0.0.1:3000')
})
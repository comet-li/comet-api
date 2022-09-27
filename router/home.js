// 首页的数据请求
const express = require('express')

const router = express.Router()

// 导入首页的路由处理函数模块
const home_handler = require('../router_handler/home')

// 首页轮播图请求
router.get('/home/banner', home_handler.Banner)

// 首页机器人列表请求
router.get('/home/robot', home_handler.Robot)

// 首页图形化考场列表请求
router.get('/home/mind', home_handler.Mind)

// 首页分类数据请求
router.get('/home/category', home_handler.Category)


// ----------------------------------------------------------------------
// 这是monikaochang  路由处理函数模块
// 首页机器人列表请求
router.get('/category/1', home_handler.MonikaochangRobot)



module.exports = router
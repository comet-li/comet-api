// 导入数据库操作模块：
const { query } = require('express')
const db = require('../db/index')

// 首页轮播图处理函数
exports.Banner = (req, res) => {
  const sql = `select * from comet_banner`
  db.query(sql,function (err, results) {
    if(err) res.send({ status: 1, message: err.message })
    res.send({
      status: 1,
      msg: '获取广告图片成功',
      result: results
    })
  })
}

// 首页机器人考场列表处理函数
exports.Robot = (req, res) => {
  const sql = `select * from comet_robot where id <= 4;`
  db.query(sql,function (err, results) {
    if(err) res.send({ status: 1, message: err.message })
    res.send({
      status: 1,
      msg: '获取机器人列表成功',
      result: results
    })
  })
}

// 首页图形化考场列表处理函数
exports.Mind = (req, res) => {
  const sql = `select * from comet_mind`
  db.query(sql,function (err, results) {
    if(err) res.send({ status: 1, message: err.message })
    res.send({
      status: 1,
      msg: '获取图形化考场列表成功',
      result: results
    })
  })
}

// 首页分类数据处理函数
exports.Category = (req, res) => {
  const sql = `select * from comet_category order by id`
  db.query(sql,function (err, results) {
    if(err) res.send({ status: 1, message: err.message })
    res.send({
      status: 1,
      msg: '获取分类数据成功',
      result: results
    })
  })
}


// ----------------------------------------------------------------------


// 首页机器人考场列表处理函数
exports.MonikaochangRobot = (req, res) => {
  const sql = `select * from comet_robot;`
  db.query(sql,function (err, results) {
    if(err) res.send({ status: 1, message: err.message })
    res.send({
      status: 1,
      msg: '获取机器人列表成功',
      result: results
    })
  })
}
const express = require('express')
const router = express.Router()
const userRouter = require('./users')
const kuayuRouter = require('./kuayu')

router.get('/', function (req, res) {
  res.pageTitle = '车辆列表'
  res._CSS = ['js/index']
  res._JS = ['js/index']
  res.assets = true;
  res.render('html/index')
})
router.use('/users', userRouter)
router.use('/kuayu', kuayuRouter)

module.exports = router
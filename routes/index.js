const express = require('express')
const router = express.Router()
const userRouter = require('./users')
const kuayuRouter = require('./kuayu')

router.get('/', function (req, res) {
  res.pageTitle = 'service work'
  res._CSS = ['js/index']
  res._JS = ['js/index']
  res.assets = true;
  res.render('html/index')
})
router.get('/sw1', function (req, res) {
  res.pageTitle = 'service work'
  res._CSS = ['js/index']
  res._JS = ['js/index']
  res.assets = true;
  res.render('html/index')
})
router.get('/sw2', function (req, res) {
  res.pageTitle = 'service work'
  res._CSS = ['js/index']
  res._JS = ['js/index']
  res.assets = true;
  res.render('html/sw2')
})
router.get('/workbox', function (req, res) {
  res.pageTitle = 'work box'
  res._CSS = ['js/index']
  res._JS = ['js/index']
  res.assets = true;
  res.render('html/workbox')
})
router.use('/users', userRouter)
router.use('/kuayu', kuayuRouter)

module.exports = router
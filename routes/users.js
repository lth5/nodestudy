const express = require('express')
const router = express.Router()

// router.get('/:name', function (req, res) {
//   res.send('sdsdsdsd, ' + req.params.name)
// })
router.get('/aaa', function (req, res) {
  res.pageTitle = '车辆列表'
  res._CSS = ['js/index']
  res._JS = ['js/index']
  res.assets = true;
  res.render('html/aaa.html')
})

module.exports = router
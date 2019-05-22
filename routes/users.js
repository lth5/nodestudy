const express = require('express')
const router = express.Router()

router.get('/:name', function (req, res) {
  res.send('I am: ' + req.params.name)
})

module.exports = router
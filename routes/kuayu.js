const express = require('express')
const router = express.Router()

router.get('/cross', function (req, res) {
	console.log(req.headers.origin)
	res.header("Access-Control-Allow-Origin", "http://localhost:8080");
	res.header('Access-Control-Allow-Headers', 'Content-type');
	res.header("Access-Control-Allow-Methods", "GET");
	res.send('cross跨域牵手成功')
})
router.get('/jsonp/:index', function (req, res) {
	var _callback = req.query.callback;
	var _data = { email: 'example@163.com', name: 'jaxu' ,index:req.params.index};
	if (_callback){
		res.type('text/javascript');
		res.send(_callback + '(' + JSON.stringify(_data) + ')');
	}
	else{
		res.json(_data);
	}
})

module.exports = router
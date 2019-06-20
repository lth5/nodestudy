const express = require('express')
const router = express.Router()
const whiteList = {
	"http://localhost:3000":true,
	"http://localhost:4000":true,
	"http://localhost:8080":true,
}
	
router.all('/cross', function (req, res) {
	console.log(req.headers.origin)
	if (whiteList[req.headers.origin]) {
		console.log(req.headers.origin)
		res.header("Access-Control-Allow-Origin",req.headers.origin );
	}
	
	res.header('Access-Control-Allow-Headers', 'Content-type');
	res.header("Access-Control-Allow-Methods", "PUT,GET");
	res.send('cross跨域牵手成功')
})
router.get('/jsonp/:index', function (req, res) {
	var _callback = req.query.cb;
	var _data = { email: 'example@163.com', name: 'jaxu' ,index:req.params.index};
	console.log(req.headers)
	console.log()
	if (_callback){
		res.type('text/javascript');
		res.send(_callback + '(' + JSON.stringify(_data) + ')');
	}
	else{
		res.json(_data);
	}
})

module.exports = router
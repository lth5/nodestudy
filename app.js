const express = require('express')
const app = express()
const indexRouter = require('./routes/index')
const ejs = require('ejs')
const path = require('path')

app.use('/', indexRouter)
app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'views/js')))
app.engine('html',ejs.__express);
app.set('view engine', 'html');
const server = app.listen(3000,()=>{
    var host = server.address().address
    var port = server.address().port
    console.log('服务启动 http://localhost:' + port);
})

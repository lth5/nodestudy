const express = require('express')
const app = express()
const indexRouter = require('./routes/index')
const ejs = require('ejs')

app.use('/', indexRouter)
app.engine('html',ejs.__express);
app.set('view engine', 'html');
const server = app.listen(3000,()=>{
    var host = server.address().address
    var port = server.address().port
    console.log('Example app listening at http://%s:%s', host, port);
})

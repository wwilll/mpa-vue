let express = require('express');
let bodyParser = require('body-parser');
let fs = require('fs');
let path = require('path');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('../dist'));

// const MongoClient = require('mongodb').MongoClient
// const url = 'mongodb://localhost:27017/forumdb' // 连接到forumdb数据库
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept') 
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    res.header('X-Powered-By', ' 3.2.1')
    res.header('Content-Type', 'application/json; charset=utf-8')
    next()
})

app.get('/test/test-get', (req, res) => {
    // res.setHeader('content-type', 'html/text');
    res.send('hello get!');
})
app.post('/test/test-post', (req, res) => {
    let id = req.body.userId
    res.send('id: ' + id);
})
//write something
app.post('/write/test-write', (req, res) => {
    fs.writeFile('./server-demo/static/test.txt', 'qaaaa', 'utf8', err => {
        if (err) {
            console.log('写文件出错！错误：' + err)
        } else {
            console.log('ok');
        }
    })
    fs.writeFile('./server-demo/static/test2.txt', 'bbbb', 'utf8', err => {
        if (err) {
            console.log('写文件出错！错误：' + err)
        } else {
            console.log('ok');
        }
    })
    res.send('obj');
})
//read something
app.get('/read/test-read', (req, res) => {
    let filename = path.join(__dirname, 'static/test.txt');
    fs.readFile(filename, (err, data) => {
        if (err) throw err;
        console.log(data.toString('utf8'));
    })
    res.send('read success!');
})
//create something
app.get('/read/test-create', (req, res) => {
    fs.mkdir('./server-demo/static/test-mkdir', err => {
        if (err) {
            console.log('failed to create directory');
            console.log(err);
            res.send(err);
        } else {
            res.send('create directory successfully');
        }
    })
})
app.get('*', (req, res) => {
    res.send('请求地址不存在！');
})
app.post('*', (req, res) => {
    res.send('请求地址不存在！');
})

let port = 9978;
app.listen(port, () => {
    console.log('listening at http://localhost:' + port);
})
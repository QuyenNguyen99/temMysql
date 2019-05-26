const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express()
const port = 3000




process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
process.on('uncaughtException', function (err) {
    console.error("Node NOT Exiting...", err);
});
app.use(bodyParser({ limit: '50mb' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/', (req, res) => {
  connection.query('select * from categories_manage', function (error, results, fields) {
    if (!!error) console.log('err mysql');
    else console.log('successful mysql \n');
    for(var item of results) {
        item.menuchinh = item.main_menu;
        item.tieude = item.title;
        item.trangthai = item.status;
    }
    res.send( results);
  });
});

app.get('/contactview', (req, res) => {
  connection.query('select * from categories_manage where id = ' + this.req.query.id, function (error, results, fields) {
    if (!!error) console.log('err mysql');
    else console.log('successful mysql \n');
    res.send( results[0]);
  });
});

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'data'
});

connection.connect(function(err) {
  if (!!err) console.log('er');
  else console.log("Connected!!!");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
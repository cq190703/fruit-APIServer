const mongoose = require('mongoose');

function connect() {
  let conn = "mongodb+srv://root:root@cluster0-ybhgr.mongodb.net/db_fruit?retryWrites=true&w=majority"
  mongoose.connect(conn, {useNewUrlParser: true});

  let db = mongoose.connection;
  db.on('error', () => {
    console.log("数据库连接遇到错误")
  });
  db.once('open', function () {
    console.log("数据库连接成功")
  });
}

module.exports = {connect}
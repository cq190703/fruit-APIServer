var express = require('express');
var router = express.Router();
const userController = require("../control/user")

// 添加用户
router.post('/adduser', (req, res, next) => {
  console.log(req.body)
  userController.addUser(req.body).then(data => {
    res.send({code: 0, msg: "添加成功"});
  })
});

module.exports = router;

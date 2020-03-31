const express = require('express');
let router = express.Router();
const orderController = require("../control/order")

// 添加订单
router.post('/addOrder', (req, res, next) => {
  let {user_id, price, tel, address, items} = req.body
  let order_no = Date.now() + (parseInt(Math.random() * 10000))
  orderController.addOrder({order_no, user_id, price, tel, address, items}).then(data => {
    res.send({code: 0, msg: "添加成功"});
  }).catch(e => {
    res.send({code: 1, msg: e})
  })
});

// 查询所有订单
router.get('/', (req, res, next) => {
  orderController.getOrder().then(data => {
    res.send({code: 0, msg: "查询成功", data});
  }).catch(e => {
    res.send({code: 1, msg: e})
  })
});

// 通过id查询订单
router.get('/getOrderById', (req, res, next) => {
  let {_id} = req.query
  orderController.getOrderById(_id).then(data => {
    res.send({code: 0, msg: "查询成功", data});
  }).catch(e => {
    res.send({code: 1, msg: e})
  })
});

// 通过id删除订单
router.get('/delOrderById', (req, res, next) => {
  let {_id} = req.query
  orderController.delOrderById(_id).then(data => {
    res.send({code: 0, msg: "删除成功"});
  }).catch(e => {
    res.send({code: 1, msg: e})
  })
});

module.exports = router;

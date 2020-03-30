const mongoose = require('mongoose');
const orderModel = require("../model/order")

module.exports = {
  // 添加订单
  async addOrder(orderInfo) {
    let resut = await orderModel.insertMany(orderInfo);
    return resut;
  },

  // 查询所有订单
  async getOrder() {
    let resut = await orderModel.find();
    return resut;
  },

  // 通过id查询订单
  async getOrderById(_id) {
    let resut = await orderModel.find({_id});
    return resut;
  }
}
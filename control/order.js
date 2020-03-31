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
    let resut = await orderModel.find({_id}).populate("user_id","username").populate("items.goods_id");
    return resut;
  },
  // 通过id删除订单
  async delOrderById(_id) {
    let resut = await orderModel.deleteOne({_id});
    return resut;
  }
}
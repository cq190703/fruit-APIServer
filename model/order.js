const mongoose = require('mongoose');
let Schema = mongoose.Schema;

// todo 测试时的 goodsSchema  待调整
mongoose.model("goods", {})

let orderSchema = new Schema({
  order_status: {type: Number, default: 0}, // 订单状态 0-待付款 1-待发货 2-待收货 3-已完成
  user_id: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},  // 用户id
  tel: {type: Number, required: true}, // 收货人电话
  address: {type: String, required: true}, // 收货地址
  price: {type: Number, required: true},  // 总价格
  items: [ // 购买的商品
    {
      goods_id: {type: mongoose.Schema.Types.ObjectId, ref: "goods", required: true},  // 商品id
      // goods_name: {type: String, required: true}, // 商品名称
      // img: {type: String, required: true},  // 商品图片
      // price: {type: Number, required: true},  // 商品单价
      buy_count: {type: Number, required: true},  // 购买数量
    }
  ]
}, {timestamps: {createdAt: "create_time"}});
let orderModel = mongoose.model('orders', orderSchema)

module.exports = orderModel
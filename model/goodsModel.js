const mongoose = require("mongoose")

let goodsScheme = mongoose.Schema({
	title:{type:String,required:true},
	name:{type:String,required:true},
	desc:{type:String,required:true},
	img:{type:String,required:true},
	// 控制商品是否上架
	putaway:{type:Number,default:-1},
	// 原价
	originalPrice:{type:Number,default:0},
	// 现价
	presentPrice:{type:Number,default:0},
	// 销量
	sales:{type:Number,default:0},
	// 单位
	unit:{type:String,default:"斤"},
})

let goodsModel = mongoose.model("good",goodsScheme)
module.exports = goodsModel



const mongoose = require('mongoose');
const goods = require("../model/goodsModel")
//插入商品
let insertGoods = async (obj)=>{
    let result = await goods.insertMany(obj)
}
//查询商品
let findGoods = async (page,pageSize)=>{
    let count = await goods.count()
    let result = await goods.find().limit(Number(pageSize)).skip((page-1)*pageSize)
    return {count:count,result:result}
}
//删除商品
let delGoods = async (_id)=>{
    let result =await  goods.findByIdAndDelete(_id)
}
//修改状态信息
let putAway = async (_id,putaway)=>{
    let result =await goods.findByIdAndUpdate(_id,{putaway:putaway})
    return putaway
}
//根据id查找信息
let findOne = async (id)=>{
    let result = await goods.findOne({_id:id})
    return result
}
let updateGoods = async (_id,obj)=>{
    
    let {title,name,desc,img,putaway,originalPrice,presentPrice,sales,unit}=obj
    let result = await goods.findByIdAndUpdate(_id,{title,name,desc,img,putaway,originalPrice,presentPrice,sales,unit} )
    return result
}
module.exports ={insertGoods,findGoods,delGoods,putAway,findOne,updateGoods}
var express = require('express');
var router = express.Router();

const {insertGoods,findGoods,delGoods,putAway,findOne,updateGoods} = require('../control/goods')

  //添加商品
router.post('/add',(req,res)=>{
 let {title,name,desc,img,putaway,originalPrice,presentPrice,sales,unit} = req.body 
  insertGoods({title,name,desc,img,putaway,originalPrice,presentPrice,sales,unit})
  .then(()=>{res.send({err:0,msg:'插入成功'})})
  .catch((err)=>{res.send({err:-1,msg:'插入失败请重试'})})
})

//查询商品
router.get('/',(req,res)=>{
  let {page = 1 ,pageSize = 5} = req.query
  findGoods(page,pageSize)
  .then(({count,result})=>{res.send({err:0,msg:'查询成功',count:count,list:result})})
  .catch((err)=>{res.send({err:-1,msg:'查询失败请重试'})})
})

//删除商品
router.delete('/del',(req,res)=>{
  let {_id} = req.query
  console.log(_id)
  delGoods(_id)
  .then(()=>{res.send({err:0,msg:'删除成功'})})
  .catch((err)=>{res.send({err:-1,msg:'删除失败请重试'})})
})

//更改状态信息
router.post('/state',(req,res)=>{
  let {_id,putaway} = req.body
  putAway(_id,putaway)
  .then(()=>{res.send({err:0,msg:'修改成功'})})
  .catch((err)=>{res.send({err:-1,msg:'修改失败请重试'})})
})

//根据id查找信息
router.get('/find',(req,res)=>{
  let {id} = req.query
  findOne(id)
  .then((result)=>{res.send({result,err:0,msg:'查找成功'})})
  .catch((err)=>{res.send({err:-1,msg:'查找失败请重试'})})
})

//修改商品信息
router.post('/update',(req,res)=>{
  let news = req.body
  let {_id,obj}=news
  let {title,name,desc,img,putaway,originalPrice,presentPrice,sales,unit}=obj
  updateGoods(_id,{title,name,desc,img,putaway,originalPrice,presentPrice,sales,unit})
  .then(()=>{res.send({err:0,msg:'修改成功'})})
  .catch((err)=>{res.send({err:-1,msg:'修改失败请重试'})})
})

module.exports=router
const express = require('express')
const { create,del,login,find } =  require('../control/AdministratorCtr')
const authPermission = require("../minddlewera/authPermissions")
const autoToken = require("../minddlewera/autoToken")


const router = express.Router()

/* *************** 新增管理员 *********************  */
router.post('/create',autoToken,authPermission,(req,res)=>{
  let {userName,passWord,leavel} = req.body
  create(userName,passWord,leavel)
  .then(()=>{res.send({err:0,msg:'注册成功'})})
  .catch((err)=>{res.send({err})})
})
/**************** 删除管理员 ******************************/
router.post('/del',autoToken,authPermission,(req,res)=>{
  let {_id} = req.body
  console.log(req.body)
  del(_id)
  .then(()=>{res.send({err:0,msg:'删除成功'})})
  .catch((err)=>{res.send(err)})
})
/**************** 登陆 ***********************************/
router.post('/login',(req,res)=>{
  let { userName,passWord } = req.body 
  login(userName,passWord)
  .then((result)=>{res.send(result)})
  .catch((err)=>{res.send(err)})
})
/**************** 查询 ******************************/
router.get('/find',autoToken,authPermission,(req,res)=>{
  find()
  .then((result)=>{res.send(result)})
  .catch((err)=>{res.send(err)})
})



module.exports = router
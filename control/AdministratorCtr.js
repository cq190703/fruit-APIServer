const jsonWebToken = require('jsonwebtoken')
const Administrator = require('../model/Administrator') 
const { secret } = require("../config/config")
class AdministratorCtr{
  async create(userName,passWord,leavel) {
    let result = await Administrator.insertMany({userName,passWord,leavel})
    console.log('result',result)
    console.log(userName,passWord,leavel)
    return result
  }
  async del(_id) {
    let result = await Administrator.deleteOne({_id})

    return result
  }
  async login(userName,passWord) {
    // MyModel.find({ name: 'john', age: { $gte: 18 }});
    let userInfo = await Administrator.find({userName,passWord})
    console.log(userInfo)
    if(userInfo.length!==0){
      console.log(1)
      let token = jsonWebToken.sign({userInfo},secret,{expiresIn:"1d"})
      console.log(2)
      return ({code:0,msg:'登陆成功',token})
    }else{
      return ({code:404,msg:'账号或者密码错误'})
    }
  }
  async find() {
    let result = await Administrator.find()
    return ({code:0,msg:result})
  }
}
module.exports = new AdministratorCtr

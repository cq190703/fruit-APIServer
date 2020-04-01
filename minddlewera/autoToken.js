const jsonWebToken = require('jsonwebtoken')
const { secret } = require("../config/config")

module.exports = async function (req,res,next){
  // console.log(req)
  try {
    let token = req.headers.authorization.split("Bearer ")[1]
    let { userInfo } = jsonWebToken.verify(token,secret)
    req.userInfo = userInfo
    // console.log('大傻逼',req.userInfo)
  } catch(err) {
    console.log(err)
    return res.send({err:402,msg:"token失效啦"})
  }

  await next()

}
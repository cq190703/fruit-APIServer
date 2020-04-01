module.exports = async (req,res,next)=>{
  try {
    // await next()
    next()
  } catch (err) {
    console.log(err)
    let code = err.status||err.statusCode||500
    let msg = code ===500 ? "服务器内部错误":err.message
    let stack = err.stack
    res.body = {code,msg,stack}
  }
}
const permissionList = require('../config/permissions')

module.exports = async function(req,res,next) {
  let { path,method} = req
  let { leavel,id,userName } =req.userInfo[0]
  let list = permissionList[leavel]
  console.log('method',method)
  console.log('我爱你',leavel)
  console.log(list)
  let boolean = false 
  console.log('path',path)
  list.map((item,index)=>{
    console.log('path',path,"resources",item.resources)
    // console.log(item.resources,path,item.permissions.indexOf(method.toLowerCase()))
    if(path.indexOf(item.resources)!==-1&&item.permissions.indexOf(method.toLowerCase())!==-1){
      boolean = true
      console.log(1111)
    }
  })
  if(boolean){ return  await next() }
  console.log('臭弟弟')
  res.send({code:403,msg:'权限不足,无法访问'})
}
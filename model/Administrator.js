const mongoose = require('mongoose')

let Administrator = mongoose.Schema({
  __v :     {type:Number,select:false},
  userName: {type:String,select:true},
  passWord: {type:String,select:true},
  leavel  : {type:String,default:'admin'},
})

let AdministratorModel = mongoose.model('Administrator',Administrator)
module.exports = AdministratorModel
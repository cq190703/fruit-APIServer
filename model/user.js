var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username:  String,
  pwd: String,
});
let userModel = mongoose.model('User',userSchema)

module.exports = userModel
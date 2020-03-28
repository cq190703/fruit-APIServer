const mongoose = require('mongoose');
const userModel = require("../model/user")

module.exports = {
  async addUser(obj) {
    let resut = await userModel.insertMany(obj);
    return resut;
  }
}
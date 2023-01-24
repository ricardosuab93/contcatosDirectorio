const mongoose  = require('mongoose')
const { Schema, Model } = require('mongoose')

var userSchema = new Schema({
    cod_vend: String,
    edad: Number,
    nombre: String,
    celular: String,
  })
  
  const User = mongoose.model('User', userSchema)
  
  module.exports = {User}
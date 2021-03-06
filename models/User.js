const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  rooms: [{type: Types.ObjectId, ref: 'Room'}]
})

module.exports = model('User', schema)
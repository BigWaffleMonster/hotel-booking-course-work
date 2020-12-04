const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  DateIn: {type: Date},
  DateOut: {type: Date},
  RoomType: {type: String},
  guests: {type: Number, default: 1},
  owner: {type: Types.ObjectId, ref: 'User'}
})

module.exports = model('Room', schema)
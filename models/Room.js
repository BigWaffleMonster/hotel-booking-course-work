const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  DateIn: {},
  DateOut: {},
  owner: {type: Types.ObjectId, ref: 'User'}
})

module.exports = model('Room', schema)
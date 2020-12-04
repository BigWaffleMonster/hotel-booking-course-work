const {Router} = require('express')
const Room = require('../models/Room')
const auth = require('../middleware/auth.middleware')

const router = new Router()

router.post('/bookroom', auth, async (req, res) => {
  try {

    const {DateIn, DateOut, guests, RoomType} = req.body

    const room = new Room({
      DateIn, DateOut, RoomType, guests, owner: req.user.userId 
    })

    await room.save()

    res.status(201).json({ room })
    
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong. Try again' })
  }
})

router.get('/bookedrooms', auth, async (req, res) => {
  try {
    const rooms = await Room.find({ owner: req.user.usedId })
    res.json(rooms)
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong. Try again' })
  }
})

module.exports = router
const express = require('express')
const passport = require('passport')
const { ensureLoggedIn } = require('connect-ensure-login')

const router = express.Router()
const {User} = require('./models/user')
const {ToDo} = require('./models/toDo')

router.use(express.static('public'))

router.use(passport.authenticate('session'))

router.use(ensureLoggedIn("/auth/login"))


router.get('/list', async (req, res) => {
    const user = await User.findOne({username: req.user.username})
    const entries = await ToDo.find({username: req.user.username})
    res.render('list.ejs', {user, entries})
})

router.post('/list', async (req, res) => {
    const entry = new ToDo({toDo: req.body.toDo, username: req.user.username})
    await entry.save();
    res.redirect("/page/list")
})

exports.router = router
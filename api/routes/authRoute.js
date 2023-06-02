const express = require("express")
const router = express.Router()
const authController = require('../controller/authController')
const middle= require("../middleware/jwt")

router.post('/register', authController.register)
router.post('/login', authController.login)
router.post('/logout', authController.logout)


module.exports= router
const express = require("express")
const router = express.Router()
const userController = require('../controller/userController')
const middle= require("../middleware/jwt")

router.delete('/delete/:id', middle.verifyToken, userController.deleteUser)

module.exports= router
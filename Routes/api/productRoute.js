const express = require("express")
const _ = express.Router()
const obodhanController = require('../../controller/hisabController/obodhanController')

   
_.post("/obodhan", obodhanController)

   
module.exports = _
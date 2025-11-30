const express = require("express")
const _ = express.Router()
const obodhanController = require('../../controller/hisabController/obodhanController')
const getObodhan = require('../../controller/hisabController/getObodhanController')

   
_.post("/obodhan", obodhanController)
_.get("/obodhan", getObodhan)

   
module.exports = _
const express = require("express")
const _ = express.Router()
const obodhanController = require('../../controller/hisabController/obodhanController')
const getObodhan = require('../../controller/hisabController/getObodhanController')
const milkController = require('../../controller/hisabController/milkController')
const getMilkData = require('../../controller/hisabController/getmilkdataController')

   
_.post("/obodhan", obodhanController)
_.get("/obodhan", getObodhan)
_.post("/milk", milkController)
_.get("/milk", getMilkData)

   
module.exports = _
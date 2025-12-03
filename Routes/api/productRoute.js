const express = require("express")
const _ = express.Router()
const obodhanController = require('../../controller/hisabController/obodhanController')
const getObodhan = require('../../controller/hisabController/getObodhanController')
const milkController = require('../../controller/hisabController/milkController')
const getMilkData = require('../../controller/hisabController/getmilkdataController')
const getKanchaBazarDataController = require('../../controller/hisabController/getKanchaBazar')
const kanchaBazarController = require('../../controller/hisabController/kanchaBazarController')
const mudhiBazarController = require('../../controller/hisabController/mudhiBazarController')
const getMudhiBazarDataController = require('../../controller/hisabController/getMudhiBazarController')
const moshlaBazarController = require('../../controller/hisabController/moshlaBazarController')
const getMoshlaBazarDataController = require('../../controller/hisabController/getMoshlaDataController')

   
_.post("/obodhan", obodhanController)
_.post("/kanchabazar", kanchaBazarController)
_.post("/milk", milkController)
_.post("/mudhibazar", mudhiBazarController)
_.post("/moshlabazar", moshlaBazarController)
_.get("/obodhan", getObodhan)
_.get("/milk", getMilkData)
_.get("/kanchabazar", getKanchaBazarDataController)
_.get("/mudhibazar", getMudhiBazarDataController)
_.get("/moshlabazar", getMoshlaBazarDataController)

   
module.exports = _
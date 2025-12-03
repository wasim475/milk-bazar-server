const mudhiBazarSchema = require("../../Model/mudhiBazarSchema")

const mudhiBazarController = async (req, res)=>{
    const {name,kg, rate, total} = req.body
    const mudhiBazarData = new mudhiBazarSchema({ name, kg, rate, total});
    await mudhiBazarData.save();
    res.send(mudhiBazarData)
}

module.exports = mudhiBazarController
const moshlaBazarSchema = require("../../Model/moshlaBazarSchema.js")

const moshlaBazarController = async (req, res)=>{
    const {name,kg, rate, total} = req.body
    const moshlaBazarData = new moshlaBazarSchema({ name, kg, rate, total});
    await moshlaBazarData.save();
    res.send(moshlaBazarData)
}

module.exports = moshlaBazarController
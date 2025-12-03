const kanchaBazar = require("../../Model/kanchaBazarSchema")

const kanchaBazarController = async (req, res)=>{
    const {name,kg, rate, total} = req.body
    const kanchaBazarData = new kanchaBazar({ name, kg, rate, total});
    await kanchaBazarData.save();
    res.send(kanchaBazarData)
}

module.exports = kanchaBazarController
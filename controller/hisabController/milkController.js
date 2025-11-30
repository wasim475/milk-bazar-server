const milkSchema = require("../../Model/milkSchema")

const milkController = async (req, res)=>{
    const {kg, rate, total} = req.body
    const milkData = new milkSchema({ kg, rate, total});
    await milkData.save();
    res.send(milkData)
}

module.exports = milkController
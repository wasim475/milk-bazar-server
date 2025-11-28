const obodhanSchema = require("../../Model/obodhanSchema")

const obodhanController = async (req, res)=>{
    const {name, address, gift} = req.body
    const obodhanData = new obodhanSchema({ name, address, gift});
    await obodhanData.save();
    res.send(obodhanData)
}

module.exports = obodhanController
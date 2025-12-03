const moshlaBazarSchema = require("../../Model/moshlaBazarSchema");
const getMoshlaBazarDataController = async (req, res) => {
  const { year } = req.query;
  if (year) {
      const start = new Date(`${year}-01-01`);
    const end = new Date(`${year}-12-31`);
     const filterData = await moshlaBazarSchema.find({
        time: { $gte: start, $lte: end }
      });

      return res.send(filterData);
  }

  const allMoshlaBazarData = await moshlaBazarSchema.find({});

      return res.send(allMoshlaBazarData);
  
};

module.exports = getMoshlaBazarDataController;
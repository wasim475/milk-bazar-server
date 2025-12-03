const kanchaBazarSchema = require("../../Model/kanchaBazarSchema");
const getKanchaBazarDataController = async (req, res) => {
  const { year } = req.query;
  if (year) {
      const start = new Date(`${year}-01-01`);
    const end = new Date(`${year}-12-31`);
     const filterData = await kanchaBazarSchema.find({
        time: { $gte: start, $lte: end }
      });

      return res.send(filterData);
  }

  const allKanchaBazarData = await kanchaBazarSchema.find({});

      return res.send(allKanchaBazarData);
  
};

module.exports = getKanchaBazarDataController;
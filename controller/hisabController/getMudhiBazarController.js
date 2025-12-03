const mudhiBazarSchema = require("../../Model/mudhiBazarSchema");
const getMudhiBazarDataController = async (req, res) => {
  const { year } = req.query;
  if (year) {
      const start = new Date(`${year}-01-01`);
    const end = new Date(`${year}-12-31`);
     const filterData = await mudhiBazarSchema.find({
        time: { $gte: start, $lte: end }
      });

      return res.send(filterData);
  }

  const allMudhiBazarData = await mudhiBazarSchema.find({});

      return res.send(allMudhiBazarData);
  
};

module.exports = getMudhiBazarDataController;
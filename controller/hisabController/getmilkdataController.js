const milkSchema = require("../../Model/milkSchema");
const getMilkData = async (req, res) => {
  const { year } = req.query;
  if (year) {
      const start = new Date(`${year}-01-01`);
    const end = new Date(`${year}-12-31`);
     const filterData = await milkSchema.find({
        time: { $gte: start, $lte: end }
      });

      return res.send(filterData);
  }

  const allMilkData = await milkSchema.find({});

      return res.send(allMilkData);
  
};

module.exports = getMilkData;
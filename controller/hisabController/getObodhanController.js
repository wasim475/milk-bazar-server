const obodhanSchema = require("../../Model/obodhanSchema");
const getObodhan = async (req, res) => {
  const { year } = req.query;
  if (year) {
      const start = new Date(`${year}-01-01`);
    const end = new Date(`${year}-12-31`);
     const filterData = await obodhanSchema.find({
        time: { $gte: start, $lte: end }
      });

      return res.send(filterData);
  }

  const allObodhanData = await obodhanSchema.find({});

      return res.send(allObodhanData);
  
};

module.exports = getObodhan;
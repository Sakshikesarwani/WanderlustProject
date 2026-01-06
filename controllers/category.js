const listings = require("../models/listing");
module.exports.renderCategory = async (res, req) => {
  const category = req.params.category;
  console.log("req.params:", category);
  const listing = await listings.find({ category });
};

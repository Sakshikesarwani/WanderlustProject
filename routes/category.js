const express = require("express");
const router = express.Router();
const listings = require("../models/listing");

router.get("/category/:category", async (req, res) => {
  const category = req.params.category;
  const allListings = await listings.find({ category });
  res.render("listings/category.ejs", { category, allListings });
});

module.exports = router;

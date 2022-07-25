const router = require("express").Router();
const Category = require("../models/Category");

//POST CATEGORIES
router.post("/", async (req, res) => {
  const newCat = new Category(req.body);

  try {
    const savedCat = await newCat.save();
    res.status(200).json(savedCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL CATEGORIES
router.get("/", async (req, res) => {
  try {
    const savedCat = await Category.find();
    res.status(200).json(savedCat);
  } catch (err) {}
});

module.exports = router;

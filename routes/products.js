const router = require("express").Router();
const products = require("../productData");

router.get(`/products`, (req, res) => {
  res.render("products", {
    title: "My product page",
  });
});

router.get("/api/products", (req, res) => {
  res.json({ products });
});

module.exports = router;

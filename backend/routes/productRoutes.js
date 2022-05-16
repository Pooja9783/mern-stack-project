const express = require("express");
const {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetalis,
} = require("../controllers/products.controlles");

const router = express.Router();

router.route("/products").get(getAllProduct); //The router.route() function returns an instance of a single route that you can then use to handle HTTP verbs with optional middleware.
router.route("/products/new").post(createProduct);
router
  .route("/products/:id")
  .put(updateProduct)
  .delete(deleteProduct)
  .get(getProductDetalis);

module.exports = router;

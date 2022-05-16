const Product = require("../models/products.model");
const ErrorHandler = require("../utils/errorHandler");
//~~~~~~~~Create Product---- Admin~~~~~~~~~~
exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({ success: true, product });
};

//~~~~~~~~Get All Product~~~~~~~~~~
exports.getAllProduct = async (req, res, next) => {
  const product = await Product.find();
  res.status(201).json({ success: true, product });
};

//~~~~~~~~Get Product Details~~~~~~~~~~
exports.getProductDetalis = async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 400));
  }
  res.status(201).json({ success: true, product });
};

//~~~~~~~~update Product~~~~~~~~~~
exports.updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({ success: true, product });
};

//~~~~~~~~Delete Product~~~~~~~~~~
exports.deleteProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Produc not found",
    });
  }
  await product.remove();
  res
    .status(201)
    .json({ success: true, message: "Product Deleted Successfully" });
};

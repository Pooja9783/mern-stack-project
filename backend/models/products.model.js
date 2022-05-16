const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please Enter Product Name"],
    trim: true,
  },
  description: {
    type: String,
    require: [true, "Please Enter Product Description"],
  },
  price: {
    type: Number,
    require: [true, "Please Enter Product Price"],
    maxlength: [8, "Price cannot be exceed 8 characters"],
  },
  rating: { type: Number, default: 0 },
  img: [
    {
      public_id: {
        type: String,
        require: true,
      },
      url: { type: String, require: true },
    },
  ],
  category: { type: String, require: [true, "Please Enter Product Category"] },
  stock: {
    type: Number,
    require: [true, "Please Enter Product stock"],
    maxlength: [4, "stcok cannot be exceed 4 characters"],
    default: 1,
  },
  review: [
    {
      name: { type: String, require: true },
      rating: { type: Number, require: true },
      comment: { type: String, require: true },
    },
  ],
  numOfReview: { type: Number, require: true, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("product", productSchema);

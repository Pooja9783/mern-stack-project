const express = require("express");
const errorMiddleware = require("./middleware/Error");
const app = express();
app.use(express.json()); //to recognize the incoming Request Object as a JSON Object
//Route Imports
const product = require("./routes/productRoutes.js");

app.use("/api/v1", product);

//middleware for error
app.use(errorMiddleware);

module.exports = app;

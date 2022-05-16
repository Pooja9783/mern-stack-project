const app = require("./app");
const dotenv = require("dotenv");
const connectDb = require("./config/db.js");
//config
dotenv.config({ path: "backend/config/config.env" });

app.listen(process.env.PORT, () => {
  connectDb();

  console.log(`Server is working on ${process.env.PORT}`);
});

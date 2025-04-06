const mongoose = require("mongoose");
require("dotenv").config();

const connectWithDb = () => {
  mongoose
    .connect(process.env.DATA_U)
    .then(() => console.log("DB connected successfully"))
    .catch((error) => {
      console.error("DB connection error:", error);
      process.exit(1);
    });
};

module.exports = connectWithDb;

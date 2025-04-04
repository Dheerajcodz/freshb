const mongoose = require("mongoose");
require(dotenv).config();

const connectwithdb = () => {
  mongoose
    .connect(process.env.DATA_U, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("db connected successfully"))
    .catch((error) => {
      console.log("DB facing connection issues");
      console.log(error);
      process.exit(1);
    });
};

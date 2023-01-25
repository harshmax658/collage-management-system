const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const url = process.env.DATABASE_URL || "dd";

mongoose
  .connect(url)
  .then(() => {
    console.log("dB config set succesfully");
  })
  .catch((error) => {
    console.log(error);

    console.log("dB config error");
  });

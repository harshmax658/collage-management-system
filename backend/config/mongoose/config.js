const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const url = process.env.DATABASE_URL;
mongoose
  .connect(url)
  .then(() => {
    console.log("dB config set succesfully");
  })
  .catch((er) => {
    console.log(er);
    console.log("dB config error");
  });

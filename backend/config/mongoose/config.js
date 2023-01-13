const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const url = process.env.DATABASE_URL;
mongoose
  .connect(url)
  .then(() => {
    console.log("Db config set succesfully");
  })
  .catch((er) => {
    console.log(er);
    console.log("Db config error");
  });

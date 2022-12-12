const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1/cms")
  .then(() => {
    console.log("Db config set succesfully");
  })
  .catch((er) => {
    console.log(er);
    console.log("Db config error");
  });

require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

//parse request body as JSON
app.use(express.json());
require("./config/mongoose/config");

app.use(require("./routes"));

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`server is up running on port ${port}`);
});

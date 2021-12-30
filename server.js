const express = require("express");
const app = express();

require("./util/contract");

const port = process.env.PORT || 8080;

app.listen(process.env.PORT || 8080, () => {
  console.log("Listening port " + port);
});

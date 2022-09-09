const express = require("express");
const app = express();
const routes = require("./routes");
app.use("/api", routes);

app.get("/", function (req, res) {
  res.send("Hello World!!");
});

app.listen(3000);

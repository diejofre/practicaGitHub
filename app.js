const express = require("express");
const app = express();
const routes = require("./routes");
app.use("/api", routes);

app.get("/", function (req, res) {
  res.send("Hola Mundo");
});

app.listen(3000);

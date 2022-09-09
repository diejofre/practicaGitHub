const express = require("express");
const app = express();

const personas = [
  {
    nombre: "Pepe",
    edad: 28,
  },
  {
    nombre: "José",
    edad: 45,
  },
];

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/personas", (req, res) => {
  res.send(personas);
});

app.listen(3000);

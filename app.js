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

<<<<<<< HEAD
app.listen(3000)
=======
app.get("/personas", (req, res) => {
  res.send(personas);
});

app.listen(3000);
>>>>>>> 2f6da950ef51bd6c5e0c3bcaf315a06359edfda1

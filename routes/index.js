const express = require("express");
const router = express.Router();

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

router.get("/personas", (req, res) => {
  res.send(personas);
});

module.exports = router;

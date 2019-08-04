const routes = require("express").Router();
const cors = require("cors");
routes.get("/bonk", cors(), (req, res) => {
  console.log("yo yo yo");
  res.json({
    ping: "pong",
    bongo: "bingo"
  });
});

module.exports = routes;

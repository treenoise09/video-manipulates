const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "Homepage.html"));
});

app.get("/Video-details", function (req, res) {
    res.sendFile(path.join(__dirname + "/Video-details.html"));
  });

app.get("/adminpage", function (req, res) {
  res.sendFile(path.join(__dirname, "adminpage.html"));
});

app.get("/adminpage/:id", function (req, res) {
  res.sendFile(path.join(__dirname, "adminpage.html"));
});

app.get("/adminpage/:id/:page", function (req, res) {
  res.sendFile(path.join(__dirname, "adminpage.html"));
});

app.listen(3000, function () {
  console.log("listening on port 3000");
});
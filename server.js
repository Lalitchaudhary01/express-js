const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get(`/`, (req, res) => {
  res.render("index", {
    title: "My home page",
  });
});
app.get(`/about`, (req, res) => {
  res.render("about", {
    title: "My about page",
  });
});
app.get(`/download`, (req, res) => {
  res.download(path.resolve(__dirname) + "/about.html");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

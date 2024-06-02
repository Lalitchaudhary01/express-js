const router = require("express").Router();
const apikeyMiddleware = require("../middlewares/apikey");

router.get(`/`, (req, res) => {
  res.render("index", {
    title: "My home page",
  });
});

router.get(`/about`, (req, res) => {
  res.render("about", {
    title: "My about page",
  });
});

router.get(`/download`, (req, res) => {
  res.download(path.resolve(__dirname) + "/about.html");
});

// router.get(`/api/products`, apikeyMiddleware, (req, res) => {
//   res.json([
//     {
//       id: "007",
//       name: "Agent_Jhakaas",
//     },
//     {
//       id: "404",
//       name: "BugFinder",
//     },
//     {
//       id: "123",
//       name: "CodeBaba",
//     },
//     {
//       id: "999",
//       name: "Debugger_Bhai",
//     },
//     {
//       id: "666",
//       name: "Browser_Bakchod",
//     },
//   ]);
// });

module.exports = router;

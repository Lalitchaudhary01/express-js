const express = require("express");
const path = require("path");
const app = express();
const mainRouter = require("./routes/index");
const productRouter = require("./routes/products");
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

// Serve static files from the "public" directory
app.use("/public", express.static(path.join(__dirname, "public")));

// Use routers
app.use(mainRouter);
app.use(productRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

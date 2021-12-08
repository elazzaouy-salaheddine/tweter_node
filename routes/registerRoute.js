const express = require("express");
const app = express();
const router = express.Router();

app.set("view engine", "pug");
app.set("views", "views");

router.get("/", (req, res, next) => {
  var payload = {
    pageTitle: "register  page from pug",
  };
  res.status(200).render("register", payload);
});

router.post("/", (req, res, next) => {
  var payload = {
    pageTitle: "rogister in page from pug",
  };
  res.status(200).render("register", payload);
});
module.exports = router;

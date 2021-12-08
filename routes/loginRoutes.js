const express = require("express");
const app = express();
const router = express.Router();

app.set("view engine", "pug");
app.set("views", "views");

router.get("/", (req, res, next) => {
  var payload = {
    pageTitle: "log in page from pug",
  };
  res.status(200).render("login", payload);
});
module.exports = router;

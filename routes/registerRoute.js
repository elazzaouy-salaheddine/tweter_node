const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

router.get("/", (req, res, next) => {
  var payload = {
    pageTitle: "register  page from pug",
  };
  res.status(200).render("register", payload);
});

router.post("/", (req, res, next) => {
  var payload = req.body;
  var firstname = req.body.firstname.trim();
  var lastname = req.body.lastname.trim();
  var username = req.body.username.trim();
  var email = req.body.email.trim();
  var password = req.body.password;

  if (firstname && lastname && username && password && email) {
  } else {
    payload.errosMessage = "make sure eache field are valide";
    res.status(200).render("register", payload);
  }
});
module.exports = router;

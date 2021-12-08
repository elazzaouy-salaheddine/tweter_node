const express = require("express");
const app = express();
const port = 3003;
const middleware = require("./middleware");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("./database");
const server = app.listen(port, () =>
  console.log("server is running in port :" + port)
);

app.set("view engine", "pug");
app.set("views", "views");

// static files
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));
// Routes

const loginRoute = require("./routes/loginRoutes");
const registerRoute = require("./routes/registerRoute");

app.use("/login", loginRoute);
app.use("/register", registerRoute);

app.get("/", middleware.requireLogin, (req, res, next) => {
  var payload = {
    pageTitle: "Home page from pug",
  };
  res.status(200).render("home", payload);
});

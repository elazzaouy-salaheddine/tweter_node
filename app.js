const express = require("express");
const app = express();
const port = 3003;

const server = app.listen(port, () =>
  console.log("server is running in port :" + port)
);

app.set("view engine", "pug");
app.set("views", "views");

app.get("/", (req, res, next) => {
  var payload = {
    pageTitle: "Home page from pug",
  };
  res.status(200).render("home", payload);
});

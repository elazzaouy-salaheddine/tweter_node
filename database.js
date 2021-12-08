const mongoosDB = require("mongoose");

class database {
  constructor() {
    this.connect();
  }
  connect() {
    mongoosDB
      .connect("mongodb://localhost:27017/twitter_clone")
      .then(() => {
        console.log("database conection successful");
      })
      .catch(() => {
        console.log("database conection erroes " + err);
      });
  }
}

module.exports = new database();

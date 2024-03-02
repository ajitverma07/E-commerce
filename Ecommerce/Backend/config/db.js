const mongoose = require("mongoose");
const { MONGO_URI } = require("./env");

const dbConfig = () => {
  mongoose.connect(MONGO_URI);

  mongoose.connection.on("connected", () => {
    console.log("Server connected with database!");
  });

  mongoose.connection.on("error", (err) => {
    console.log("Error occured while connecting with database!");
  });
};

module.exports = dbConfig;

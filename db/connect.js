const mongoose = require("mongoose");

const connectDB = (url) => {
  mongoose.connect(url, {
    dbName: "JOBS",
  });
};

module.exports = connectDB;

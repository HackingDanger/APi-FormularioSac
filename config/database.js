const mongoose = require("mongoose");

require('dotenv').config()

const url = `mongodb+srv://rootroot:${process.env.MONGO_DB_PASSWORD}@cluster0.p7fi5q3.mongodb.net/?retryWrites=true&w=majority`;

const connectionParams = {
  useNewUrlParser: true,
};

mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("Connected to the database... ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. ${err}`);
  });

module.exports = mongoose;



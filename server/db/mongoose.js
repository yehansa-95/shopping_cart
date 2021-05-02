const mongoose = require("mongoose");
require("dotenv").config();
require('../config/environment');

const URI = `${process.env.DATABASE_URL}?retryWrites=true&w=majority`;

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDb");
});
mongoose.connection.on("error", (e) => {
  console.error("Error connecting to MongoDb", e.message);
});
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;
const MONGODB_URL = "mongodb://127.0.0.1:27017/crud";

mongoose.Promise = global.Promise;
mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log(`Could not connect to the database. Error: ${err}`);
    process.exit();
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (_, res) => {
  res.json({
    message: "Server is running",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

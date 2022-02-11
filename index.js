const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRouter = require("./authRouter");
require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/auth", authRouter);

const start = async () => {
  try {
    await mongoose.connect(process.env.URL);
    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();

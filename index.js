const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();

const start = () => {
  try {
    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();

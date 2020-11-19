const express = require("express");
const app = express();
require("express-async-errors");
const cors = require("cors");
const imageRouter = require("./routers/images");

app.use(express.static("./build"));
app.use(cors());
app.use(express.json());

app.use("/api/images", imageRouter);

module.exports = app;

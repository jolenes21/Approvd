import express = require("express");
import mongoose = require("mongoose");
import morgan = require("morgan");
import bodyParser = require("body-parser");

import { error404, error500 } from "./middleware";

const app = express();
const port = process.env.PORT || 4200;
const logLevel = process.env.LOG_LEVEL || "dev";

//mongoose instance connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/approvddb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const approvddb = mongoose.connection;

approvddb.on("error", console.error.bind(console, "connection error:"));

approvddb.once("open", () => {
  console.log("Connection Successful!");
});

// parser middleware needed to process req.body
app.use(morgan(logLevel));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// register routes
app.use("/");

// handle 404s
app.use(error404);

// handle 500s
app.use(error500);

// listen on server port
app.listen(port, () => {
  console.log(`Running on port: ${port}...`);
});

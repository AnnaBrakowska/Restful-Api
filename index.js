const express = require("express");
const mongoose = require("mongoose");

//allowes to send objects thru post
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;
const routes = require("./src/routes/crmRoutes");
//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/FakeApi");

//bodyParser setup
//urlencoded extended true => you can pass nested objects, otherwise strings and arrays
app.use(bodyParser.urlencoded({ extended: true }));
//tells system that we will be using json
app.use(bodyParser.json());

routes(app);
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

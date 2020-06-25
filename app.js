const express = require("express");
const mongoose = require("mongoose");
const postRoutes = require("./routes/posts");
const bodyParser = require("body-parser");
const cors = require('cors');
require('dotenv/config');
const app = express();
const PORT = process.env.PORT || 5000;
// MIDDLEWARES 
app.use(cors());
app.use(bodyParser.json());
app.use("/posts", postRoutes);
//DB Connection
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true,useUnifiedTopology: true } , (err) => {
  err
    ? console.log("Error connecting to DB " + err)
    : console.log("Database is connected.");
});
//Listen on Port
app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});

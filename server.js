const express = require("express");
const server = express();
// const db = require("./src/database/connection.js")
// Body parser
const bodyParser = express.urlencoded({ extended: false });

server.use(bodyParser);

// handlers
const home = require("./routes/home");
const addReview = require("./routes/addReview");

// static files
server.use(express.static("./public"));

// RENDER HOME
server.get("/", home.get);


// ADD REVIEW
server.get("/add-review", addReview.get);

server.post("/add-review", addReview.post);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

const express = require("express");
const home = require("./routes/home");
const review = require("./routes/addReview");
const server = express();

server.get('/', home.get);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

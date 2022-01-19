const express = require("express");
const home = require("./routes/home");
const review = require("./routes/addReview");
const server = express();

const PORT = process.env.PORT || 7070;
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

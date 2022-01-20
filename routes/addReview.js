const db = require("../src/database/connection.js");

function get(request, response) {
  response.send(
    `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
    </style> 
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Nunito:wght@300&display=swap');
      </style> 
    <title>Nom Nom</title>
  </head>
  <body>
    <div class="hero stack-md">

      <h1 class="hero__title">Review</h1>
      <p class="hero__subtitle">Enter a review for your favourite restaurant</p>

    </div>

    <div class="form-wrapper">

      <form method="POST" action="/add-review" id="review-form" class="stack-md">

        <label for="post__user">User Name</label>
        <input name="user" id="post__user" type="text" aria-label="Insert your name here" required>

        <label for="post__restaurant">Restaurant Name</label>
        <input name="restaurant" id="post__restaurant" type="text" aria-label="Insert the name of the restaurant you are reviewing" required>

        <label for="post__body">Review</label>
        <textarea name="body" id="post__body" cols="40" rows="5" aria-label="Insert your review here" required></textarea>

        <label for="post__rating">Rate the restaurant</label>
        <input type="number" id="post__rating" name="rating"
        min="1" max="5" aria-label="Insert a rating between 1 and 5">

        <button type="submit" aria-label="Click this button to submit your review">Send Review!</button>

        <a href="/" class="link-back-home" aria-label="Click this link to go back to the home page.">Back to home</a>

      </form>

    </div>
    
  </body>
  </html>
  `
  );
}

function sanitise(...inputArr) {
  return inputArr.map((inputStr) => {
    return inputStr.replace(/>/g, "&lt;");
  });
}

function post(request, response) {
  let userNameNS = request.body.user;
  let restaurantNS = request.body.restaurant;
  let reviewBodyNS = request.body.body;
  let ratingNS = request.body.rating;
  let sanitisedArr = sanitise(userNameNS, restaurantNS, reviewBodyNS, ratingNS);
  //console.log(sanitisedArr);
  const [userName, restaurant, reviewBody, rating] = sanitisedArr;
  db.query(
    `INSERT INTO reviews(username, restaurant, textcontent, rating) VALUES($1,$2,$3,$4)`,
    [userName, restaurant, reviewBody, rating]
  ).then(() => {
    response.redirect("/");
  });
}

module.exports = { get, post };

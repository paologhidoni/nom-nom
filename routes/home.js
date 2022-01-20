const { response } = require("express");
const db = require("../src/database/connection.js");

const ratingConverter = (rating) => {
  let stars = ``;
  for (let i = 0; i < rating; i++) {
    stars += `⭐️`;
  }
  return stars;
}

function get(request, response) {
  db.query("SELECT * FROM reviews").then((result) => {
    console.log(result.rows);
    const reviews = result.rows;
    const reviewsList = reviews
      .map(
        (review) => `
        <li class="post">

            <div class="post__header stack-md">
    
                <div class="post__restaurant">
                    <h2 class="post__restaurant--name">${review.restaurant}</h2>
                    <div class="restaurant--rating">${ratingConverter(review.rating)}</div>
                </div>
                
                <h3 class="post__author">${review.username}</h3>
    
    
            </div>
    
            <p class="post__body">${review.textcontent}</p>
            
        </li>`
      )
      .reverse()
      .join("");

    response.send(`
        
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
        
            <h1 class="hero__title">Nom Nom</h1>
            <p class="hero__subtitle">Read or leave a review of your favourite restaurants in London! 🇬🇧</p>

            <a href="/add-review" class="link-leave-review" aria-label="Click this link to leave a review of a restaurant.">Leave a review</a>
        
            </div>
        
            <ul class="wrapper">${reviewsList}</ul>
            
            </body>
        </html>
        
    `);
  });
}

module.exports = { get };

BEGIN;

DROP TABLE IF EXISTS users, reviews, restaurants, comments CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  textcontent TEXT,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE, -- CASCADE means delete the post if the author gets deleted
  rating INTEGER
);

CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  reviews_id INTEGER REFERENCES reviews(id)
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  textcontent TEXT,
  comment_review_id INTEGER REFERENCES reviews(id)  
);

-- INSERT INTO users (username) VALUES 
--   ('Luigi'),
--   ('Mario')
-- ;

-- INSERT INTO reviews (textcontent, user_id, rating) VALUES ('Reviewwwwww', 1, 5);



COMMIT;
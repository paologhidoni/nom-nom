BEGIN;

DROP TABLE IF EXISTS reviews CASCADE;

-- CREATE TABLE users (
--   id SERIAL PRIMARY KEY,
  
-- );

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  restaurant VARCHAR(255) NOT NULL,
  textcontent TEXT,
  rating INTEGER
);

INSERT INTO reviews (username, restaurant, textcontent, rating) VALUES 
('user123','Wagamamas','Reviewwwwww', 3);


-- CREATE TABLE restaurants (
--   id SERIAL PRIMARY KEY,
--   reviews_id INTEGER REFERENCES reviews(id)
-- );

-- CREATE TABLE comments (
--   id SERIAL PRIMARY KEY,
--   textcontent TEXT,
--   comment_review_id INTEGER REFERENCES reviews(id)  
-- );

-- INSERT INTO users (username) VALUES 
--   ('Luigi'),
--   ('Mario')
-- ;

-- INSERT INTO reviews (textcontent, user_id, rating) VALUES 
--   ('Reviewwwwww', 1, 5),
--   ('It was good', 2, 4)
-- ;



COMMIT;
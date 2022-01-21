### 🔗 Visit the [live site](https://nom-nom-app.herokuapp.com/)

# How to install

- Git clone https://github.com/fac-23/nom-nom-app.git
- Run command `npm install` in terminal

## Local Database Setup

- In your terminal 
  - run ` chmod +x ./scripts/create_db
  - run ` chmod +x ./scripts/populate_db
  - run ` ./scripts/create_db <name of your local database> `
  - run ` ./scripts/populate_db `
  - run ` psql `
  - run ` \connect <name of your local database> `
  - run ` \dt ` to check the tables are there. There should be only one table named "reviews"
  
- To start sever run command `npm run dev`
- For cypress testing run command `npm run test`
- Access locally on localhost:3000

# User stories

- As a user, I want to: submit information to your site for anyone to see
- As a user, I want to: come back to your site later and see what I posted is still there

Since this project is open-ended you’ll need to write your own more specific user stories once you know what you want to build.

# Acceptance Criteria

- A form for users to submit data
- A page showing all the data
- Semantic form elements with correctly associated labels
- A Postgres database hosted on Heroku
- A schema describing your database in your README
- Tests for server routes and database access
- Not process user input as SQL commands
- Hidden environment variables (i.e. not on GitHub)

# Stretch criteria

- A way to view filtered/sorted data, instead of just all of it
- GitHub Actions CI setup to run your tests when you push

## Roles:

- Scrum Facilitator and UX Design - _Paolo_
- DevOps - _Juliette_
- Quality Assurance - _Orian_

## Project Set up:

- Connect local and remote repos
- Create project set up branch
- Actualize npm directory and install express and cypress
- Set up database, deploy on Heroku and connect to directory

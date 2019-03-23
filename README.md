# GraphQL Node.js Example
This repository holds an example GraphQL server written in Node.js.
The code uses Apollo server with Knex, Objection.js and sqlite.

## Running Locally
- Clone the repository
- Install dependencies: `npm install`
- Install knex globally for migrations: `npm install -g knex`
- Run `knex migrate:latest` and `knex seed:run` to create the database with sample data
- Execute `npm run dev` to start the development server on `localhost:4000`
- Use an app like [Insomnia](https://insomnia.rest/) to send GraphQL queries to the server

# node-crud-api

## Installation / Prerequisites

Node v16.15.1 is defined in [.nvmrc](/.envrc) file:

- `npm install` to install dependencies
- [nvm](https://github.com/nvm-sh/nvm) helps to define node.js version automatically

## Run

2 modes of running application (**development** and **production**):

- `npm run start:dev` The application is run in development mode using `nodemon`
- `npm run start:prod` The application is run in production mode (there is a  that starts the build process and then runs)

## Tests

2 types of tests are used: Jest and Postman:

- `npm run test` to start jest tests
- [node-crud-api.postman_collection.json](/postman_collection.json) is postman tests file

## API

Endpoint `api/users`:

- **GET** `api/users` is used to get all persons
- **GET** `api/users/${userId}`  is used to get a person by id
- **POST** `api/users` is used to create record about new user and store it in database
- **PUT** `api/users/{userId}` is used to update existing user
- **DELETE** `api/users/${userId}` is used to delete existing user from database

Users are stored as `objects` that have following properties:

- `id` — unique identifier (`string`, `uuid`)
- `username` — user's name (`string`, **required**)
- `age` — user's age (`number`, **required**)
- `hobbies` — user's hobbies (`array` of `strings` or empty `array`, **required**)
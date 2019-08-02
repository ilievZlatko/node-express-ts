# node-express-ts

It is really hard to find well structured, easy to scale examples for Node.js rest API.
This is the reason for this repo, it is a  boilerplate/startup for a scalable rest APIs
built with Node.js, Express.js, TypeScript and MongoDB.

This should be open to edit and scale easily, will might also have options for SQL databases,
so far the idea is to only work with MongoDB.

## Start script
```npm run dev```

## Viewing the app
```http://localhost:3000```

## Endpoints
```http://localhost:3000/api/v1/search?q=London``` => replace London with any other city by your choice
```http://localhost:3000/api-docs``` => Swagger documentation for the API

### Still under development

### TODO List:
- Add MongoDB in the game
- Create User Auth with passport, options for google, facebook auth?!?
- Implement JWT Bearer on protected routes
- Split it to microservices
- Add middle layer to comunicate between microservices and UI

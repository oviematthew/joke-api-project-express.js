# 🎉 Joke API Project – Express.js + Node.js

This project is a **RESTful API** built using **Express.js** and **Node.js** that allows users to manage and interact with a collection of jokes. The API provides full **CRUD** functionality and also integrates with an external API to fetch fresh programming jokes from [JokeAPI.dev](https://jokeapi.dev/).

---

## 🌐 API Endpoints

| HTTP Method | Endpoint                                                  | Description                                                       |
|-------------|-----------------------------------------------------------|-------------------------------------------------------------------|
| GET         | `/api/jokes`                                              | Retrieve the full list of all stored jokes                        |
| GET         | `/api/jokes/:id`                                          | Retrieve a specific joke by its unique ID                         |
| POST        | `/api/jokes`                                              | Add a new joke (requires a JSON body with joke data)              |
| PUT         | `/api/jokes/:id`                                          | Update an existing joke by ID                                     |
| DELETE      | `/api/jokes/:id`                                          | Delete a joke by ID                                               |
| GET         | `/api/jokes/programming/list?amount=n`                   | Fetch `n` programming jokes from [JokeAPI.dev](https://jokeapi.dev) (default: 3) |

---

## 🧠 Technologies Used

| Tool              | Description                                                   |
|-------------------|---------------------------------------------------------------|
| **Node.js**       | JavaScript runtime environment for executing server code      |
| **Express.js**    | Web framework for handling routing and middleware             |
| **body-parser**   | Middleware for parsing incoming JSON payloads                 |
| **https**         | Core Node.js module used for making external API requests     |
| **fs**            | Node.js File System module for reading/writing local JSON     |
| **CORS**          | Middleware to handle Cross-Origin Resource Sharing            |
| **[JokeAPI.dev](https://jokeapi.dev)** | Third-party API used to fetch programming jokes |

---

# Joke API Project – Express.js + Node.js

This project is a **RESTful API** built with **Express.js** and **Node.js** that allows users to interact with a joke collection. The API supports CRUD operations and integrates with an external programming joke API to fetch jokes from a third-party source.

---


## 🌐 API Endpoints

| HTTP Method | Endpoint                | Description                                |
|-------------|-------------------------|--------------------------------------------|
| GET         | `/api/jokes`            | Retrieve the full list of all jokes        |
| GET         | `/api/jokes/:id`        | Retrieve a specific joke by its unique ID  |
| POST        | `/api/jokes`            | Add a new joke (send JSON with joke data) |
| PUT         | `/api/jokes/:id`        | Update an existing joke by ID               |
| DELETE      | `/api/jokes/:id`        | Delete a joke by ID                         |
| GET         | `/api/jokes/programming/list?amount=n` | Fetch `n` programming jokes from external API (default 3) |


---

## 🧠 Technologies Used

| Tool            | Description                                 |
|------------------|---------------------------------------------|
| **Node.js**       | JavaScript runtime for server-side logic     |
| **Express.js**    | Fast, unopinionated web framework            |
| **body-parser**   | Middleware for parsing JSON and form data    |
| **https**         | Node module to make API requests             |
| **fs** (File System) | For reading/writing jokes.json file      |
| **CORS** (optional) | Enable requests from frontend clients      |


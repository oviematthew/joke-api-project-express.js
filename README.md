# Joke API Project – Express.js + Node.js

This project is a **RESTful API** built with **Express.js** and **Node.js** that allows users to interact with a joke collection. The API supports CRUD operations and integrates with an external programming joke API to fetch jokes from a third-party source.

It’s designed to demonstrate core backend development concepts such as routing, middleware, JSON-based data persistence, and working with external APIs using Node’s `https` module.

---

## 📌 Purpose

This project serves as a practical example of building a backend API with Express.js and Node.js. It is suitable for:

- Portfolio showcase
- Learning basic server setup and routing
- Exploring file-based JSON storage
- Practicing integration with external APIs
- Demonstrating full CRUD functionality

---

## 📚 Concepts Demonstrated

- Express.js routing and middleware
- RESTful API design
- HTTP methods: GET, POST, PUT, DELETE
- Request validation middleware
- File system operations in Node.js
- JSON parsing and data persistence
- External API consumption using `https` module
- Clean project structure for maintainability
- Optional: Deploying to Render or Railway for free hosting

---

## ✨ Features

- 🔹 **Get All Jokes** – Retrieve the full list of jokes stored in `jokes.json`
- 🔹 **Get Joke by ID** – Fetch a specific joke using its unique ID
- 🔹 **Add New Joke** – Submit a new joke using POST request with JSON body
- 🔹 **Update Joke** – Modify an existing joke by ID
- 🔹 **Delete Joke** – Remove a joke from the collection
- 🔹 **Fetch Programming Jokes** – Use external API (`jokeapi.dev`) to fetch programming-related jokes

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

---

## 📁 Project Structure

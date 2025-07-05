const express = require("express");
const router = express.Router();
const { getJokes, saveJokes } = require("../models/jokeModel");
const validateJoke = require("../middleware/validateJoke");
const https = require("https");

// GET all jokes
router.get("/", (req, res) => {
  res.json(getJokes());
});

// GET joke by ID
router.get("/:id", (req, res) => {
  const jokes = getJokes();
  const joke = jokes.find((j) => j.id === parseInt(req.params.id));
  joke ? res.json(joke) : res.status(404).json({ message: "Joke not found" });
});

// POST new joke
router.post("/", validateJoke, (req, res) => {
  const jokes = getJokes();
  const newJoke = { id: Date.now(), joke: req.body.joke };
  jokes.push(newJoke);
  saveJokes(jokes);
  res.status(201).json(newJoke);
});

// PUT update joke
router.put("/:id", validateJoke, (req, res) => {
  const jokes = getJokes();
  const index = jokes.findIndex((j) => j.id === parseInt(req.params.id));
  if (index !== -1) {
    jokes[index].joke = req.body.joke;
    saveJokes(jokes);
    res.json(jokes[index]);
  } else {
    res.status(404).json({ message: "Joke not found" });
  }
});

// DELETE joke
router.delete("/:id", (req, res) => {
  let jokes = getJokes();
  const updatedJokes = jokes.filter((j) => j.id !== parseInt(req.params.id));
  if (jokes.length === updatedJokes.length) {
    return res.status(404).json({ message: "Joke not found" });
  }
  saveJokes(updatedJokes);
  res.json({ message: "Joke deleted successfully" });
});

// External programming jokes
router.get("/programming/list", (req, res) => {
  const amount = parseInt(req.query.amount) || 3;
  const url = `https://v2.jokeapi.dev/joke/Programming?amount=${amount}&type=twopart`;

  https
    .get(url, (apiRes) => {
      let data = "";
      apiRes.on("data", (chunk) => (data += chunk));
      apiRes.on("end", () => {
        const json = JSON.parse(data);
        const jokes = json.jokes.map((j, i) => ({
          id: i + 1,
          setup: j.setup,
          delivery: j.delivery,
        }));
        res.json(jokes);
      });
    })
    .on("error", (err) => {
      res.status(500).json({ message: "Failed to fetch programming jokes" });
    });
});

module.exports = router;

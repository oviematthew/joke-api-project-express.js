const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../data/jokes.json");

function getJokes() {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

function saveJokes(jokes) {
  fs.writeFileSync(filePath, JSON.stringify(jokes, null, 2));
}

module.exports = { getJokes, saveJokes };

const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../data/jokes.json");

// Get jokes from the JSON file

function getJokes() {
  const raw = fs.readFileSync(filePath, "utf8");
  const jokes = JSON.parse(raw);

  // Assign IDs if missing
  return jokes.map((joke, index) => ({
    id: index + 1, // simple incremental ID starting at 1
    ...joke,
  }));
}

// Save jokes to the JSON file
function saveJokes(jokes) {
  fs.writeFileSync(filePath, JSON.stringify(jokes, null, 2));
}

module.exports = { getJokes, saveJokes };

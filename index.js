const express = require("express");
const app = express();
const jokesRouter = require("./routes/jokes");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(`
      <h1>Welcome to the Jokes API 🎉</h1>
      <p>Visit <a href="/api/jokes">/api/jokes</a> to get all jokes.</p>
      <p>See full documentation on <a href="https://github.com/oviematthew/joke-api-project-express.js" target="_blank">GitHub</a>.</p>
    `);
});

app.use("/api/jokes", jokesRouter);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

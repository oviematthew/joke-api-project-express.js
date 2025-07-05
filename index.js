const express = require("express");
const app = express();
const jokesRouter = require("./routes/jokes");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Jokes API!");
});

app.use("/api/jokes", jokesRouter);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

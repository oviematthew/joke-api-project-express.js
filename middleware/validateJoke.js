function validateJoke(req, res, next) {
  if (!req.body.joke || req.body.joke.length < 5) {
    return res
      .status(400)
      .json({ message: "Joke must be at least 5 characters long." });
  }
  next();
}

module.exports = validateJoke;

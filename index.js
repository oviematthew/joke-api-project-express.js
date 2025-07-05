const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const { marked } = require("marked"); // ✅ correct import

const app = express();
const jokesRouter = require("./routes/jokes");

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <title>Jokes API</title>
          <style>
            body {
              font-family: sans-serif;
              padding: 2rem;
              max-width: 800px;
              margin: auto;
              line-height: 1.6;
              text-align: center;
            }
            ul {
              list-style: none;
              padding: 0;
            }
            li {
              margin: 0.5rem 0;
            }
            a {
              color: #007bff;
              text-decoration: none;
            }
            a:hover {
              text-decoration: underline;
            }
            h1 {
              font-size: 2rem;
              margin-bottom: 1rem;
            }
            p {
              margin-bottom: 1rem;
            }
          </style>
        </head>
        <body>
          <h1>🎉 Welcome to the Jokes API!</h1>
          <p>This is a RESTful API built with Express.js and Node.js.</p>
          <ul>
            <li>🔍 <a href="/api/jokes">View All Jokes</a></li>
            <li>📚 <a href="/docs">Read Full Documentation</a></li>
          </ul>
          <p>By <a href="https://oviematthew.com" target="_blank">Matthew Ovie Enamuotor</a></p>
        </body>
      </html>
    `);
});

app.get("/docs", (req, res) => {
  const readmePath = path.join(__dirname, "README.md");
  const readme = fs.readFileSync(readmePath, "utf8");
  const html = marked(readme);

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Jokes API - Documentation</title>
        <style>
          body { font-family: sans-serif; padding: 2rem; max-width: 800px; margin: auto; line-height: 1.6; }
          pre, code { background-color: #f4f4f4; padding: 4px 8px; border-radius: 4px; }
          pre { overflow-x: auto; }
          table { border-collapse: collapse; width: 100%; }
          th, td { padding: 8px; border: 1px solid #ccc; }
        </style>
      </head>
      <body>
        ${html}
      </body>
    </html>
  `);
});

app.use("/api/jokes", jokesRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

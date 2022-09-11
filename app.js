// DEPENDENCIES - Server :run th server code
const cors = require("cors");
const express = require("express");

// CONFIGURATION - App.js with express
const app = express();

// MIDDLEWARE - set above the Controller to PARSE
app.use(cors());
app.use(express.json());

// krystalController handle the ROUTES
const krystalsController = require("./controllers/krystalController");
app.use("/krystals", krystalsController);


// Route to server request to localhost:3003
app.get("/", (req, res) => {
  res.send("Welcome to Kim's Krystal Healing App");
});

const db = require("./db/dbConfig.js");

app.get("/test", async (req, res) => {
  try {
    const allDays = await db.any("SELECT * FROM test");
    res.json(allDays);
  } catch (err) {
    res.json(err);
  }
});

// Route to server with no path return 404 Error message
app.get("*", (req, res) => {
    res.status(404).send("Page not found");
  });

// EXPORT MUST
module.exports = app;
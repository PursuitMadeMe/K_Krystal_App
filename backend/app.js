const cors = require("cors");
const express = require("express");

const app = express();

app.use(cors());
app.use(express.json());

const krystalsController = require("./controllers/krystalController");
app.use("/krystals", krystalsController);


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

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
  });

module.exports = app;
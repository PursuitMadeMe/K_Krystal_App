const express = require("express");
const healers = express.Router();
const {
  getAllHealers,
  getHeal,
  createHeal,
  updateHeal,
  deleteHeal,
} = require("../queries/healers.js");

//INDEX
healers.get("/", async (req, res) => {
  const allHealers = await getAllHealers();
  if (allHealers[0]) {
    res.status(200).json({ payload: allHealers, success: true });
  } else {
    res.status(500).json({ error: "server error line 17 healersController" });
  }
});

// Read (Singular/Specific ID)
healers.get("/:id", async (req, res) => {
  const { id } = req.params;
  const heal = await getHeal(id);
  if (heal.id) {
    res.json({ payload: heal, success: true });
  } else {
    res.status(404).json({
      payload: "not found",
      success: false,
      error: "heal not found line 31 healersController",
    });
  }
});

// Create
healers.post("/", async (req, res) => {
  const { body } = req;

  body.id = body;

  try {
    const createdHealer = await createHeal(body.payload);
    if (createdHealer.id) {
      res.status(200).json({
        success: true,
        payload: createdHealer,
      });
    } else {
      res.status(422).json({
        success: false,
        payload: "Must include type field line 52 healersController",
      });
    }
  } catch (err) {
    console.log(err);
  }
});

// Update
healers.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  body.id = body;

  const updatedHeal = await updateHeal(req.body, id);
  console.log(updatedHeal);
  if (updatedHeal.id) {
    res.status(200).json(updatedHeal);
  } else {
    res.status(404).json({ error: "heal not found line 72 healersController" });
  }
});

// Delete
healers.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedHeal = await deleteHeal(id);
  if (deletedHeal.id) {
    res.status(200).json({ payload: deletedHeal, success: true });
  } else {
    res.status(404).json({ payload: "heal not found line 83 healersCoontroller", success: false });
  }
});

module.exports = healers;

const express = require("express");
const chakras = express.Router();
const {
  getAllChakras,
  getChakra,
  createChakra,
  updateChakra,
  deleteChakra,
} = require("../queries/chakras.js");

//INDEX
chakras.get("/", async (req, res) => {
  const allChakras = await getAllChakras();
  if (allChakras[0]) {
    res.status(200).json({ payload: allChakras, success: true });
  } else {
    res.status(500).json({ error: "server error line 17 chakrasController" });
  }
});

// Read (Singular/Specific ID)
chakras.get("/:id", async (req, res) => {
  const { id } = req.params;
  const chakra = await getChakra(id);
  if (chakra.id) {
    res.json({ payload: chakra, success: true });
  } else {
    res.status(404).json({
      payload: "not found",
      success: false,
      error: "chakra not found line 31 chakrasController",
    });
  }
});

// Create
chakras.post("/", async (req, res) => {
  const { body } = req;

  body.id = body;

  try {
    const createdChakra = await createChakra(body.payload);
    if (createdChakra.id) {
      res.status(200).json({
        success: true,
        payload: createdChakra,
      });
    } else {
      res.status(422).json({
        success: false,
        payload: "Must include type field line 52 chakrasController",
      });
    }
  } catch (err) {
    console.log(err);
  }
});

// Update
chakras.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  body.id = body;

  const updatedChakra = await updateChakra(req.body, id);
  console.log(updatedChakra);
  if (updatedChakra.id) {
    res.status(200).json(updatedChakra);
  } else {
    res.status(404).json({ error: "chakra not found line 72 chakrasController" });
  }
});

// Delete
chakras.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedChakra = await deleteChakra(id);
  if (deletedChakra.id) {
    res.status(200).json({ payload: deletedChakra, success: true });
  } else {
    res.status(404).json({ payload: "chakra not found line 83 chakrasCoontroller", success: false });
  }
});

module.exports = chakras;

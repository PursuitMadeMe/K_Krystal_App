const express = require("express");
const krystals = express.Router();
const { getAllKrystals, getKrystal, createKrystal, updateKrystal, deleteKrystal } = require("../queries/krystals");
const { checkName, checkBooleen } = require("../validations/checkKrystals");

// // INDEX
// krystals.get("/", async (req, res) => {});


// // INDEX
// krystals.get("/", (req, res) => {
//   res.json({ status: "ok" });
// });

// INDEX - Read
krystals.get("/", async (req, res) => {
    const allKrystals = await getAllKrystals();
    if (allKrystals[0]) {
      res.status(200).json(allKrystals);
    } else {
      res.status(500).json({ error: "server error" });
    }
  });

  // SHOW - Read
krystals.get("/:id", async (req, res) => {
    const { id } = req.params;
    const krystal = await getKrystal(id);
    if (krystal) {
      res.json(krystal);
    } else {
      res.status(404).json({ error: "not found" });
    }
  });


// CREATE
krystals.post("/", checkName, checkBooleen, async (req, res) => {
    try {
      const krystal = await createKrystal(req.body);
      console.log("IN ROUTES: ",krystal)
      res.json(krystal);
    } catch (error) {
      res.status(422).json({ error: error });
    }
  });

// UPDATE
krystals.put("/:id", checkBooleen, checkName, async (req, res) => {
    const { id } = req.params;
    console.log(id);
   
    const updatedKrystal = await updateKrystal(req.body, id);
    if (updatedKrystal.id) {
      res.status(200).json(updatedKrystal);
    } else {
      res.status(422).json({ error: "Krystal not updated (line48)" });
    }
  });


// DELETE
krystals.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedKrystal = await deleteKrystal(id);
    if (deletedKrystal.id) {
      res.status(200).json(deletedKrystal);
    } else {
      res.status(400).json("Snack not found");
    }
  });

module.exports = krystals;
const express = require("express");
// creates a server route to localhost:3003/krystals
const krystals = express.Router();
// imports the CRUD routes to our seed data base
const { getAllKrystals, getKrystal, createKrystal, updateKrystal, deleteKrystal } = require("../queries/krystals");
// imports checks to receive correct CRUD route
const { checkName, checkBooleen } = require("../validations/checkKrystals");


// INDEX - Read and return all resources if available or return 500 error status : localhost:3003/krystals
krystals.get("/", async (req, res) => {
    const allKrystals = await getAllKrystals();
    if (allKrystals[0]) {
      res.status(200).json(allKrystals);
    } else {
      res.status(500).json({ error: "server error" });
    }
  });

  // SHOW - Read and return resources at wild card (/:id) - krystal is getKrystalroute  from databasse at wildcard or return 404 error : localhost:3003/krystals/3
krystals.get("/:id", async (req, res) => {
    const { id } = req.params;
    const krystal = await getKrystal(id);
    if (krystal) {
      res.json(krystal);
    } else {
      res.status(404).json({ error: "not found" });
    }
  });


// CREATE - create a new resource , if the name is present and boolean value is accurate - krystal is createKrystal route from database or 422 error : localhost:3003/krystals/new
krystals.post("/", checkName, checkBooleen, async (req, res) => {
    try {
      const krystal = await createKrystal(req.body);
      console.log("IN ROUTES: ",krystal)
      res.json(krystal);
    } catch (error) {
      res.status(422).json({ error: error });
    }
  });

// UPDATE - update the resource at wild card , if the name is present and boolean value is accurate - krystal is updateKrystal route from database or 422 error : localhost:3003/krystals/3/edit
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


// DELETE - delete the resource at wild card , if the name is present and boolean value is accurate - krystal is deleteKrystal route from database or 422 error : localhost:3003/krystals/3/delete

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
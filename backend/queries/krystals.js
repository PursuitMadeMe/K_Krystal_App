const db = require("../db/dbConfig.js");

// INDEX Route - DONE
const getAllKrystals = async () => {
  const allKrystals = await db.any("SELECT * FROM krystals");
  return allKrystals;
};

// SHOW Route - DONE
const getKrystal = async (id) => {
  const oneKrystal = await db.oneOrNone(
    "SELECT * FROM krystals WHERE id=$1",
    id
  );
  return oneKrystal;
};

// CREATE Route - DONE
const createKrystal = async (krystal) => {
  const newKrystal = await db.oneOrNone(
    "INSERT INTO krystals (name, healing, chakra, image, numerology, category, is_favorite) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
    [
      krystal.name,
      krystal.healing,
      krystal.chakra,
      krystal.image,
      krystal.numerology,
      krystal.category,
      krystal.is_favorite,
    ]
  );
  console.log("NEW CRYSTAL : ", newKrystal);
  return newKrystal;
};

// UPDATE Route - DONE
const updateKrystal = async (krystal, id) => {
  const updatedKrystal = await db.oneOrNone(
    "UPDATE krystals SET name=$1, healing=$2, chakra=$3, image=$4, numerology=$5, category=$6, is_favorite=$7  WHERE id=$8 RETURNING *",
    [
      krystal.name,
      krystal.healing,
      krystal.chakra,
      krystal.image,
      krystal.numerology,
      krystal.category,
      krystal.is_favorite,
      id,
    ]
  );
  console.log(updatedKrystal, "GOOD VIBES");
  return updatedKrystal;
};
// DELETE Route - DONE
const deleteKrystal = async (id) => {
  const deletedKrystal = await db.oneOrNone(
    "DELETE FROM krystals WHERE id=$1 RETURNING *",
    id
  );
  return deletedKrystal;
};

module.exports = {
  getAllKrystals,
  getKrystal,
  createKrystal,
  updateKrystal,
  deleteKrystal,
};

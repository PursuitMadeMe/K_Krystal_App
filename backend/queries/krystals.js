const db = require("../db/dbConfig.js");

// INDEX Route - DONE 
const getAllKrystals = async () => {
    try {
        const allKrystals = await db.any("SELECT * FROM krystals");
        return allKrystals;
      } catch (error) {
        return error;
      }
    };

    // SHOW Route - DONE 
    const getKrystal = async (id) => {
        try {
          const oneKrystal = await db.one("SELECT * FROM krystals WHERE id=$1", id);
          return oneKrystal;
        } catch (error) {
          return error;
        }
      };

      // CREATE Route - DONE
const createKrystal = async (krystal) => {
    try {
      const newKrystal = await db.one(
        "INSERT INTO krystals (name, healing, chakra, image, numerology, category, is_favorite) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
        [krystal.name, krystal.healing, krystal.image, krystal.numerology, krystal.category, krystal.is_favorite]
      );
      return newKrystal;
    } catch (error) {
      return error;
    }
  };

  // UPDATE Route - DONE
const updateKrystal = async (krystal, id) => {
    try {
      const updatedKrystal = await db.one(
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
    } catch (error) {
      console.log("NO UPDATE");
  
      return error;
    }
  };
  // DELETE Route - DONE
  const deleteKrystal = async (id) => {
    try {
      const deletedKrystal = await db.one(
        "DELETE FROM krystals WHERE id=$1 RETURNING *",
        id
      );
      return deletedKrystal;
    } catch (error) {
      return error;
    }
  };
  

module.exports = { getAllKrystals, getKrystal, createKrystal, updateKrystal, deleteKrystal };
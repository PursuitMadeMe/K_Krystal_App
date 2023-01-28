const db = require("../db/dbConfig.js");

const getAllChakras = async () => {
  try {
    const allChakras = await db.any("SELECT * FROM chakras");
    return allChakras;
  } catch (err) {
    return err;
  }
};

const getChakra = async (id) => {
  try {
    const chakra = await db.one("SELECT * FROM chakras WHERE id=$1", id);
    return heal;
  } catch (err) {
    return err;
  }
};

const createChakra = async (chakra) => {
  const { id, type, attribute } = chakra;
  try {
    const createdChakra = await db.one(
      "INSERT INTO chakras (id, type, attribute) VALUES ($1, $2, $3) RETURNING *",
      [id, type, attribute]
    );
    return createdChakra;
  } catch (err) {
    return err;
  }
};

const updateChakra = async (id, chakra) => {
  const {type, attribute } = chakra;
  try {
    const updatedChakra = await db.one(
      "UPDATE chakras SET type=$1, attribute=$2 WHERE id=$3 RETURNING *",
      [type, attribute, id]
    );
    return updatedChakra;
  } catch (err) {
    return err;
  }
};

const deleteChakra = async (id) => {
  try {
    const deletedChakra = await db.one(
      "DELETE FROM chakras WHERE id =$1 RETURNING *",
      id
    );
    return deletedChakra;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllChakras,
  getChakra,
  createChakra,
  updateChakra,
  deleteChakra,
};

const db = require("../db/dbConfig.js");

const getAllChakras = async () => {
  const allChakras = await db.any("SELECT * FROM chakras");
  return allChakras;
};

const getChakra = async (id) => {
  const chakra = await db.oneOrNone("SELECT * FROM chakras WHERE id=$1", id);
  //change return from heal to chakra
  return chakra;
};

const createChakra = async (chakra) => {
  const { id, type, attribute } = chakra;

  const createdChakra = await db.oneOrNone(
    "INSERT INTO chakras (id, type, attribute) VALUES ($1, $2, $3) RETURNING *",
    [id, type, attribute]
  );
  return createdChakra;
};

const updateChakra = async (id, chakra) => {
  const { type, attribute } = chakra;

  const updatedChakra = await db.oneOrNone(
    "UPDATE chakras SET type=$1, attribute=$2 WHERE id=$3 RETURNING *",
    [type, attribute, id]
  );
  return updatedChakra;
};

const deleteChakra = async (id) => {
  const deletedChakra = await db.oneOrNone(
    "DELETE FROM chakras WHERE id=$1 RETURNING *",
    id
  );
  return deletedChakra;
};

module.exports = {
  getAllChakras,
  getChakra,
  createChakra,
  updateChakra,
  deleteChakra,
};

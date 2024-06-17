const db = require("../db/dbConfig.js");

const getAllHealers = async () => {
  const allHealers = await db.any("SELECT * FROM healers");
  return allRewards;
};

const getHeal = async (id) => {
  const heal = await db.oneOrNone("SELECT * FROM healers WHERE id=$1", id);
  return heal;
};

const createHeal = async (heal) => {
  const { id, feelings } = heal;

  const createdHeal = await db.oneOrNone(
    "INSERT INTO healers (id, feelings) VALUES ($1, $2) RETURNING *",
    [id, feelings]
  );
  return createdHeal;
};

const updateHeal = async (id, heal) => {
  const { feelings } = heal;
  const updatedHeal = await db.oneOrNone(
    "UPDATE healers SET feelings=$1 WHERE id=$2 RETURNING *",
    [feelings, id]
  );
  return updatedHeal;
};

const deleteHeal = async (id) => {
  const deletedHeal = await db.oneOrNone(
    "DELETE FROM healers WHERE id =$1 RETURNING *",
    id
  );
  return deletedHeal;
};

module.exports = {
  getAllHealers,
  getHeal,
  createHeal,
  updateHeal,
  deleteHeal,
};

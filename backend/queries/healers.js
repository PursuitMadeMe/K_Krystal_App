const db = require("../db/dbConfig.js");

const getAllHealers = async () => {
  try {
    const allHealers = await db.any("SELECT * FROM healers");
    return allRewards;
  } catch (err) {
    return err;
  }
};

const getHeal = async (id) => {
  try {
    const heal = await db.one("SELECT * FROM healers WHERE id=$1", id);
    return heal;
  } catch (err) {
    return err;
  }
};

const createHeal = async (heal) => {
  const { id, feelings } = heal;
  try {
    const createdHeal = await db.one(
      "INSERT INTO healers (id, feelings) VALUES ($1, $2) RETURNING *",
      [id, feelings]
    );
    return createdHeal;
  } catch (err) {
    return err;
  }
};

const updateHeal = async (id, heal) => {
  const {feelings } = heal;
  try {
    const updatedHeal = await db.one(
      "UPDATE healers SET feelings=$1 WHERE id=$2 RETURNING *",
      [feelings, id]
    );
    return updatedHeal;
  } catch (err) {
    return err;
  }
};

const deleteHeal = async (id) => {
  try {
    const deletedHeal = await db.one(
      "DELETE FROM healers WHERE id =$1 RETURNING *",
      id
    );
    return deletedHeal;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllHealers,
  getHeal,
  createHeal,
  updateHeal,
  deleteHeal,
};

const { user, films, species, starship, vehicles } = require("../database");
//* User
const getUser = async ({ id }) => {
  try {
    return await user.findOne({
      where: {
        id,
      },
    });
  } catch (err) {
    throw err;
  }
};
//* Films
const getFilms = async ({ userId }) => {
  try {
    return await films.findAll({
      where: {
        usuarioId: userId,
      },
    });
  } catch (err) {
    throw err;
  }
};
//* Species
const getSpecies = async ({ userId }) => {
  try {
    return await species.findAll({
      where: {
        usuarioId: userId,
      },
    });
  } catch (err) {
    throw err;
  }
};
//* Starship
const getStarship = async ({ userId }) => {
  try {
    return await starship.findAll({
      where: {
        usuarioId: userId,
      },
    });
  } catch (err) {
    throw err;
  }
};
//* Vehicles
const getVehicles = async ({ userId }) => {
  try {
    return await vehicles.findAll({
      where: {
        usuarioId: userId,
      },
    });
  } catch (err) {
    throw err;
  }
};
module.exports = {
  getUser,
  getFilms,
  getSpecies,
  getStarship,
  getVehicles,
};

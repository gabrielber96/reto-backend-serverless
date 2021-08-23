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
    let list = await films.findAll({
      where: {
        usuarioId: userId,
      },
      attributes: ["pelicula"],
    });
    list = list.map(({ pelicula }) => {
      return pelicula;
    });
    return list;
  } catch (err) {
    throw err;
  }
};
//* Species
const getSpecies = async ({ userId }) => {
  try {
    let list = await species.findAll({
      where: {
        usuarioId: userId,
      },
      attributes: ["especie"],
    });
    list = list.map(({ especie }) => {
      return especie;
    });
    return list;
  } catch (err) {
    throw err;
  }
};
//* Starship
const getStarship = async ({ userId }) => {
  try {
    let list = await starship.findAll({
      where: {
        usuarioId: userId,
      },
      attributes: ["nave_estelar"],
    });
    list = list.map(({ nave_estelar }) => {
      return nave_estelar;
    });
    return list;
  } catch (err) {
    throw err;
  }
};
//* Vehicles
const getVehicles = async ({ userId }) => {
  try {
    let list = await vehicles.findAll({
      where: {
        usuarioId: userId,
      },
      attributes: ["vehiculo"],
    });
    list = list.map(({ vehiculo }) => {
      return vehiculo;
    });
    return list;
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

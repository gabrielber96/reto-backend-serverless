const { sequelize } = require("../database");
const { getPetition } = require("../request");
const {
  getUser,
  getFilms,
  getSpecies,
  getStarship,
  getVehicles,
} = require("../services/get");
const { createUserController } = require("../services");
const getUsers = async (req, res, next) => {
  try {
    const { id } = req.params;
    const find_user = await getUser({ id });
    if (find_user) {
      const peliculas = await getFilms({ userId: id });
      const especies = await getSpecies({ userId: id });
      const naves_estelares = await getStarship({ userId: id });
      const vehiculos = await getVehicles({ userId: id });
      return res.status(200).json({
        ...find_user.dataValues,
        peliculas,
        especies,
        vehiculos,
        naves_estelares,
      });
    }
    const { films, species, vehicles, starships, detail, ...data } =
      await getPetition({
        id,
      });
    if (detail === "Not found")
      return res.status(200).json({ detail: "Not found" });

    const results = await createUserController({
      data,
      films,
      id,
      species,
      starships,
      vehicles,
    });
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json(err);
  }
};
const createUsers = async (req, res, next) => {
  try {
    const { peliculas, especies, vehiculos, naves_estelares, detail, ...data } =
      req.body;

    const results = await createUserController({
      data,
      films: peliculas,
      species: especies,
      starships: naves_estelares,
      vehicles: vehiculos,
    });
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getUsers,
  createUsers,
};

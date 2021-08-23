const {
  createUser,
  createFilms,
  createSpecies,
  createStarship,
  createVehicles,
} = require("../services/create");
const createUserController = async ({
  films,
  species,
  vehicles,
  starships,
  data,
  id,
}) => {
  const user = await createUser({ ...data, id });
  const userId = user.dataValues.id;
  //* peliculas
  const peliculas = await Promise.all(
    films.map(async (item) => {
      item = await createFilms({ pelicula: item, userId });
      return item.dataValues.pelicula;
    })
  );
  //* especies
  const especies = await Promise.all(
    species.map(async (item) => {
      item = await createSpecies({ especie: item, userId });
      return item.dataValues.especie;
    })
  );
  //* vehiculos
  const vehiculos = await Promise.all(
    vehicles.map(async (item) => {
      item = await createVehicles({ vehiculo: item, userId });
      return item.dataValues.vehiculo;
    })
  );
  //* vehiculos
  const naves_estelares = await Promise.all(
    starships.map(async (item) => {
      item = await createStarship({ nave_estelar: item, userId });
      return item.dataValues.nave_estelar;
    })
  );
  return {
    ...user.dataValues,
    peliculas,
    especies,
    vehiculos,
    naves_estelares,
  };
};
module.exports = {
  createUserController,
};

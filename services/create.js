const {
  sequelize,
  user,
  films,
  species,
  starship,
  vehicles,
} = require("../database");

const createUser = async (obj) => {
  const id = obj.id;
  const nombre = obj.name || obj.nombre;
  const altura = obj.height || obj.altura;
  const masa = obj.mass || obj.masa;
  const color_pelo = obj.hair_color || obj.color_pelo;
  const color_piel = obj.skin_color || obj.color_piel;
  const color_ojo = obj.eye_color || obj.color_ojo;
  const ano_nacimiento = obj.birth_year || obj.ano_nacimiento;
  const genero = obj.gender || obj.gender;
  const mundo_natal = obj.homeworld || obj.mundo_natal;
  const creado = obj.created || obj.creado;
  const editado = obj.edited || obj.editado;
  const url = obj.url;

  try {
    const obj = await user.create({
      id,
      nombre,
      altura,
      masa,
      color_pelo,
      color_piel,
      color_ojo,
      ano_nacimiento,
      genero,
      mundo_natal,
      creado,
      editado,
      url,
    });
    return obj;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
const createFilms = async ({ userId, pelicula }) => {
  try {
    const obj = await films.create({
      pelicula,
      usuarioId: userId,
    });
    return obj;
  } catch (err) {
    throw err;
  }
};
const createSpecies = async ({ userId, especie }) => {
  try {
    const obj = await species.create({
      especie,
      usuarioId: userId,
    });
    return obj;
  } catch (err) {
    throw err;
  }
};
const createStarship = async ({ userId, nave_estelar }) => {
  try {
    const obj = await starship.create({
      nave_estelar,
      usuarioId: userId,
    });
    return obj;
  } catch (err) {
    throw err;
  }
};
const createVehicles = async ({ userId, vehiculo }) => {
  try {
    const obj = await vehicles.create({
      vehiculo,
      usuarioId: userId,
    });
    return obj;
  } catch (err) {
    throw err;
  }
};
module.exports = {
  createUser,
  createFilms,
  createSpecies,
  createStarship,
  createVehicles,
};

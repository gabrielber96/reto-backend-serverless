const { Sequelize, DataTypes } = require("sequelize");
const userM = require("./models/users.model");
const filmsM = require("./models/films.model");
const starshipM = require("./models/starships.model");
const speciesM = require("./models/species.model");
const vehiclesM = require("./models/vehicles.model");

const sequelize = new Sequelize(
  "bh2cjcbfe5rcoihw54it",
  "uwcbesznhv2kfkuf",
  "arcxxg6F3gsCOuOIjh6D",
  {
    host: "bh2cjcbfe5rcoihw54it-mysql.services.clever-cloud.com",
    port: "3306",
    logging: false,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  }
);
const user = userM(sequelize, DataTypes);
const films = filmsM(sequelize, DataTypes);
const starship = starshipM(sequelize, DataTypes);
const species = speciesM(sequelize, DataTypes);
const vehicles = vehiclesM(sequelize, DataTypes);
//TODO RELATIONALS
user.hasMany(films);
films.belongsTo(user);
//
user.hasMany(starship);
starship.belongsTo(user);
//
user.hasMany(species);
species.belongsTo(user);
//
user.hasMany(vehicles);
vehicles.belongsTo(user);
//

module.exports = {
  user,
  films,
  starship,
  species,
  vehicles,
  sequelize,
};

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "pelicula",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      pelicula: {
        type: DataTypes.STRING(200),
      },
    },
    {
      tableName: "pelicula",
      timestamps: false,
      initialAutoIncrement: 1,
    }
  );
};

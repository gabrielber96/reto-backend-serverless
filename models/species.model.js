module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "especie",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      especie: {
        type: DataTypes.STRING(200),
      },
    },
    {
      tableName: "especie",
      timestamps: false,
      initialAutoIncrement: 1,
    }
  );
};

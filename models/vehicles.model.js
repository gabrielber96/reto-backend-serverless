module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "vehiculo",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      vehiculo: {
        type: DataTypes.STRING(300),
      },
    },
    {
      tableName: "vehiculo",
      timestamps: false,
      initialAutoIncrement: 1,
    }
  );
};

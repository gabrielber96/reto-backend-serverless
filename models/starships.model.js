module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "nave_estelar",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nave_estelar: {
        type: DataTypes.STRING(300),
      },
    },
    {
      tableName: "nave_estelar",
      timestamps: false,
      initialAutoIncrement: 1,
    }
  );
};

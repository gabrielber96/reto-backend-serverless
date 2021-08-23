module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "usuario",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING(200),
      },
      altura: {
        type: DataTypes.STRING(10),
      },
      masa: {
        type: DataTypes.STRING(10),
      },

      color_pelo: {
        type: DataTypes.STRING(40),
      },
      color_piel: {
        type: DataTypes.STRING(40),
      },
      color_ojo: {
        type: DataTypes.STRING(40),
      },
      ano_nacimiento: {
        type: DataTypes.STRING(40),
      },
      genero: {
        type: DataTypes.STRING(10),
      },
      mundo_natal: {
        type: DataTypes.STRING(150),
      },
      creado: {
        type: DataTypes.DATE,
      },
      editado: {
        type: DataTypes.DATE,
      },
      url: {
        type: DataTypes.STRING(200),
      },
    },
    {
      initialAutoIncrement: 89,
      tableName: "usuario",
      timestamps: false,
    }
  );
};

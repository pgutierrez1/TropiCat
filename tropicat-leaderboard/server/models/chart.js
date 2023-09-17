module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "chart",
    {
      chart_id: {
          type: DataTypes.STRING,
              unqiue: true,
              allowNull: false,
      },
      name: {
          type: DataTypes.STRING,
              unqiue: true,
              allowNull: false,
      },
      artist: {
          type: DataTypes.STRING,
              allowNull: false,
      },
      plays: {
          type: DataTypes.INTEGER,
              allowNull: false,
      },
    },
    {
      timestamps: false,
    }

  );
};

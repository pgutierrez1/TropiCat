module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "score",
    {
        score_id: {
            type: DataTypes.STRING,
                unqiue: true,
                allowNull: false,
        },
        user: {
            type: DataTypes.STRING,
                allowNull: false,
        },
        chart_id: {
            type: DataTypes.STRING,
                allowNull: false,
        },
        score: {
            type: DataTypes.INTEGER,
                allowNull: false,
        },
        accuracy: {
            type: DataTypes.INTEGER,
                allowNull: false,
        },
    },
    {
      timestamps: true,
    }

  );
};

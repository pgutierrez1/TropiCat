module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "user",
    {
      user_id: {
          type: DataTypes.STRING,
              unqiue: true,
              allowNull: false,
      },
      name: {
          type: DataTypes.STRING,
              allowNull: false,
      },
      score_id_collection: {
          type: DataTypes.STRING,
          get: function() {
              return JSON.parse(this.getDataValue('score_id_collection'));
          },
          set: function(val) {
              return this.setDataValue('score_id_collection', JSON.stringify(val));
          }
      },
    },
    {
      timestamps: false,
    }

  );
};

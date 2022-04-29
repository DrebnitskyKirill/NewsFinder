"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Good_word extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
   Good_word.belongsTo( User, { foreignKey: "user_id" })
    }
  }
  Good_word.init(
    {
      word: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      user_id: {
        references: {
          model: 'Users',
          key: 'id',
        },
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      count: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Good_word",
    },
  );
  return Good_word;
};

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bad_word extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      Bad_word.belongsTo( User, { foreignKey: "user_id" })
    }
  }
  Bad_word.init({
    word: {
      type: DataTypes.TEXT,
      allowNull: false,

    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
      
    },
  }, {
    sequelize,
    modelName: 'Bad_word',
  });
  return Bad_word;
};

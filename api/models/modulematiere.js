'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class modulematiere extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.module , {
        as : 'module',
        foreignKey : 'moduleID'
      });

      this.belongsTo(models.matiere , {
        as : 'matiere',
        foreignKey : 'matiereID'
      })
    }
  };
  modulematiere.init({
    moduleID: DataTypes.INTEGER,
    matiereID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'modulematiere',
  });
  return modulematiere;
};
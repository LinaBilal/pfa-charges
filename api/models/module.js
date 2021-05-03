'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class module extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.departement,{foreignKey : 'depID'});
      this.belongsToMany(models.filiere, { through: 'modulefiliere' });
      this.belongsToMany(models.matiere, { through: 'modulematiere' });


    }
  };
  module.init({
    nom: DataTypes.STRING,
    semestre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'module',
  });
  return module;
};
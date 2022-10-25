const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dogs', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, 
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'There is no name'
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'There is no height'
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'There is no weight'
    },
    life_span: {
      type: DataTypes.STRING,
      defaultValue: 'There is no life span'
    },
    temperament: {
      type: DataTypes.STRING,
      defaultValue: 'There is no temperament'
    },
    imagen: {
      type: DataTypes.STRING,
      defaultValue: 'There is no image'
    }
  });
};

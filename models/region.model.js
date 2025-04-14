module.exports = (sequelize, DataTypes) => {
    const Region = sequelize.define('Region', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      regionName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      }
    }, {
      tableName: 'Regions',
      timestamps: false,
    });
    
  
    return Region;
  };
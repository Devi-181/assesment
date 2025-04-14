module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      categoryName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      }
    }, {    
      tableName: 'Categories',
      timestamps: false,
    });
    
  
    return Category;
  };
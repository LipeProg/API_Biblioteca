module.exports = (sequelize, Sequelize) => {
    const livros = sequelize.define("livros", {

      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      titulo: {
        type: Sequelize.STRING
      },
      editora: {
        type: Sequelize.STRING
      },
      genero: {
        type: Sequelize.STRING
      },
      coleção: {
        type: Sequelize.BOOLEAN
      },
      nota: {
        type: Sequelize.FLOAT
      }
    });
  
    livros.belongsTo(sequelize.models.estante, {
      foreignKey: 'estanteId',
      as: 'estante'
    });

    return livros;
  };